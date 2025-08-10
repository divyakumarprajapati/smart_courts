import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function SmartCourt() {
  const containerRef = useRef(null);
  const scoreARef = useRef(null);
  const scoreBRef = useRef(null);
  const stateRef = useRef(null);

  const [scores, setScores] = useState({ a: 0, b: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    renderer.setClearColor(0x0b1220, 1);
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(15, 14, 15);
    camera.lookAt(0, 0, 0);

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    const courtW = 10, courtL = 20;
    const courtGeometry = new THREE.PlaneGeometry(courtW, courtL);
    const courtMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f6b3a,
      metalness: 0.1,
      roughness: 0.9,
    });
    const court = new THREE.Mesh(courtGeometry, courtMaterial);
    court.rotation.x = -Math.PI / 2;
    scene.add(court);

    function addLine(p1, p2, color = 0xffffff) {
      const pts = [new THREE.Vector3(...p1), new THREE.Vector3(...p2)];
      const geom = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color });
      const line = new THREE.Line(geom, mat);
      scene.add(line);
    }
    addLine([-courtW / 2, 0.01, -courtL / 2], [courtW / 2, 0.01, -courtL / 2]);
    addLine([courtW / 2, 0.01, -courtL / 2], [courtW / 2, 0.01, courtL / 2]);
    addLine([courtW / 2, 0.01, courtL / 2], [-courtW / 2, 0.01, courtL / 2]);
    addLine([-courtW / 2, 0.01, courtL / 2], [-courtW / 2, 0.01, -courtL / 2]);
    addLine([-courtW / 2, 0.01, 0], [courtW / 2, 0.01, 0], 0xffffff);

    const playerGeo = new THREE.CylinderGeometry(0.5, 0.5, 1.6, 32);
    const matBlue = new THREE.MeshStandardMaterial({ color: 0x2b6bff, metalness: 0.3, roughness: 0.6 });
    const matRed = new THREE.MeshStandardMaterial({ color: 0xff416b, metalness: 0.3, roughness: 0.6 });

    const playerA = new THREE.Mesh(playerGeo, matBlue);
    playerA.position.set(-1.2, 0.8, -7);
    scene.add(playerA);

    const playerB = new THREE.Mesh(playerGeo, matRed);
    playerB.position.set(1.2, 0.8, 7);
    scene.add(playerB);

    function addMarker(x, z, color = 0xffffff) {
      const g = new THREE.CircleGeometry(0.6, 16);
      const m = new THREE.MeshBasicMaterial({ color });
      const mesh = new THREE.Mesh(g, m);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set(x, 0.02, z);
      scene.add(mesh);
      return mesh;
    }
    const markerA = addMarker(playerA.position.x, playerA.position.z, 0x1849ff);
    const markerB = addMarker(playerB.position.x, playerB.position.z, 0xff1848);

    const ballGeo = new THREE.SphereGeometry(0.22, 18, 18);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0xffe400,
      emissive: 0x222200,
      metalness: 0.2,
      roughness: 0.3,
    });
    const ball = new THREE.Mesh(ballGeo, ballMat);
    ball.position.set(0, 0.2, 0);
    scene.add(ball);

    let trailPoints = [];
    const maxTrail = 40;
    const trailGeom = new THREE.BufferGeometry();
    trailGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(maxTrail * 3), 3));
    const trailMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2, transparent: true, opacity: 0.9 });
    const trailLine = new THREE.Line(trailGeom, trailMat);
    scene.add(trailLine);

    const dashedPts = [];
    for (let z = -7; z <= 7; z += 1) dashedPts.push(new THREE.Vector3(0, 0.22, z));
    const dashedGeom = new THREE.BufferGeometry().setFromPoints(dashedPts);
    const dashedMat = new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 0.25, gapSize: 0.12 });
    const dashedLine = new THREE.Line(dashedGeom, dashedMat);
    dashedLine.computeLineDistances();
    scene.add(dashedLine);

    const ambient = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambient);
    const pl = new THREE.PointLight(0xffffff, 0.6);
    pl.position.set(0, 12, 0);
    scene.add(pl);

    let angle = Math.PI / 6;

    const rallyZ = 7;
    let ballDirection = 1;
    let ballSpeed = 0.08 + Math.random() * 0.02;
    let ballVX = 0; // horizontal velocity
    let isPaused = false;
    let scoreA = 0, scoreB = 0;

    let markerPulseA = 0;
    let markerPulseB = 0;

    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }

    function bumpScore(which) {
      const el = which === "A" ? scoreARef.current : scoreBRef.current;
      if (!el) return;
      el.classList.add("transform", "transition-transform", "duration-300", "scale-125");
      setTimeout(() => {
        el.classList.remove("scale-125");
      }, 320);
    }

    function updateScores() {
      setScores({ a: scoreA, b: scoreB });
    }

    function onPoint(scoringPlayer) {
      isPaused = true;
      if (stateRef.current) stateRef.current.textContent = "Point scored — updating";
      if (scoringPlayer === "A") scoreA++; else scoreB++;
      updateScores();
      bumpScore(scoringPlayer);

      setTimeout(() => {
        ball.position.set(0, 0.2, 0);
        ballDirection = Math.random() > 0.5 ? 1 : -1;
        ballSpeed = 0.07 + Math.random() * 0.03;
        ballVX = (Math.random() - 0.5) * 0.02;

        let countdown = 3;
        if (stateRef.current) stateRef.current.textContent = "Next rally in " + countdown;
        const t = setInterval(() => {
          countdown--;
          if (countdown > 0) {
            if (stateRef.current) stateRef.current.textContent = "Next rally in " + countdown;
          } else {
            clearInterval(t);
            isPaused = false;
            if (stateRef.current) stateRef.current.textContent = "Rally live";
          }
        }, 1000);
      }, 700);
    }

    let rafId;
    function animate() {
      rafId = requestAnimationFrame(animate);
      angle += 0.001;
      camera.position.x = 15 * Math.cos(angle);
      camera.position.z = 15 * Math.sin(angle);
      camera.lookAt(0, 0, 0);

      if (!isPaused) {
        // Move players to track the ball on their side
        const halfCourtX = courtW / 2 - 0.7;
        if (ballDirection > 0) {
          // Ball going to Player B
          const targetX = clamp(ball.position.x, -halfCourtX, halfCourtX);
          playerB.position.x += (targetX - playerB.position.x) * 0.08;
        } else {
          // Ball going to Player A
          const targetX = clamp(ball.position.x, -halfCourtX, halfCourtX);
          playerA.position.x += (targetX - playerA.position.x) * 0.08;
        }

        // Update markers to follow players and apply pulse
        if (markerA) {
          markerA.position.x = playerA.position.x;
          const sA = 1 + Math.max(0, markerPulseA);
          markerA.scale.set(sA, sA, 1);
          markerPulseA = Math.max(0, markerPulseA - 0.05);
        }
        if (markerB) {
          markerB.position.x = playerB.position.x;
          const sB = 1 + Math.max(0, markerPulseB);
          markerB.scale.set(sB, sB, 1);
          markerPulseB = Math.max(0, markerPulseB - 0.05);
        }

        // Move ball
        ball.position.z += ballDirection * ballSpeed;
        ball.position.x += ballVX;
        ballVX *= 0.995; // slight damping to avoid runaway drift
        const sideClamp = courtW / 2 - 0.25;
        ball.position.x = clamp(ball.position.x, -sideClamp, sideClamp);
        ball.position.y = 0.2 + Math.abs(Math.sin(ball.position.z * 0.6)) * 1.1;

        // Determine hits/misses at players
        const hitWindowZ = 0.8;
        const reachX = 0.8;

        if (ballDirection > 0) {
          // Approaching Player B
          if (ball.position.z >= playerB.position.z - hitWindowZ) {
            const dx = Math.abs(ball.position.x - playerB.position.x);
            if (dx <= reachX) {
              // Hit by Player B
              ballDirection = -1;
              ballSpeed = 0.07 + Math.random() * 0.04;
              ballVX = (ball.position.x - playerB.position.x) * 0.08 + (Math.random() - 0.5) * 0.02;
              markerPulseB = 0.3;
            }
            // else: miss, let it pass to trigger point when beyond rallyZ
          }
          if (ball.position.z > rallyZ + 0.6) {
            onPoint("A");
          }
        } else {
          // Approaching Player A
          if (ball.position.z <= playerA.position.z + hitWindowZ) {
            const dx = Math.abs(ball.position.x - playerA.position.x);
            if (dx <= reachX) {
              // Hit by Player A
              ballDirection = 1;
              ballSpeed = 0.07 + Math.random() * 0.04;
              ballVX = (ball.position.x - playerA.position.x) * 0.08 + (Math.random() - 0.5) * 0.02;
              markerPulseA = 0.3;
            }
            // else: miss, let it pass to trigger point when beyond rallyZ
          }
          if (ball.position.z < -rallyZ - 0.6) {
            onPoint("B");
          }
        }

        // Update trail
        trailPoints.push(ball.position.clone());
        if (trailPoints.length > maxTrail) trailPoints.shift();
        const positions = trailGeom.attributes.position.array;
        for (let i = 0; i < maxTrail; i++) {
          const idx = i * 3;
          const p = trailPoints[i] || new THREE.Vector3(ball.position.x, ball.position.y, ball.position.z);
          positions[idx] = p.x;
          positions[idx + 1] = p.y;
          positions[idx + 2] = p.z;
        }
        trailGeom.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    }

    if (stateRef.current) stateRef.current.textContent = "Ready";
    updateScores();
    animate();

    const clickHandler = () => {
      if (!isPaused) return;
      isPaused = false;
      if (stateRef.current) stateRef.current.textContent = "Rally live";
    };
    container.addEventListener("click", clickHandler);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("click", clickHandler);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-4 z-10 pointer-events-none">
        <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-6 border border-white/10">
          <div className="text-center">
            <div className="text-xs text-gray-300">Player Blue</div>
            <div ref={scoreARef} className="text-2xl font-bold text-blue-300">{scores.a}</div>
          </div>
          <div className="px-3 text-gray-200">|</div>
          <div className="text-center">
            <div className="text-xs text-gray-300">Player Red</div>
            <div ref={scoreBRef} className="text-2xl font-bold text-red-300">{scores.b}</div>
          </div>
          <div ref={stateRef} className="text-sm text-gray-300 pl-4">Ready</div>
        </div>
      </div>
      <div ref={containerRef} className="w-full h-[520px] rounded-xl shadow-2xl overflow-hidden border border-white/5" />
      <div className="mt-4 text-gray-400 text-sm text-center">
        This demo simulates an automated rally. Points are counted when the ball misses a player's side.
      </div>
    </div>
  );
}