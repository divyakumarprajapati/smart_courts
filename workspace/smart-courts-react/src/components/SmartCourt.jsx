import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const SmartCourt = () => {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [currentAngle, setCurrentAngle] = useState("Primary Orbit");
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [currentTime, setCurrentTime] = useState("--:--:--");

  const points = [0, 15, 30, 40, "Game"];

  useEffect(() => {
    if (!mountRef.current) return;

    // Core Setup
    const app = mountRef.current;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(1200, 700);
    renderer.shadowMap.enabled = true;
    app.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x04070c, 90, 220);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;

    // Clock/Loop
    const clock = new THREE.Clock();
    let elapsed = 0;
    let lastFrameAt = performance.now();

    function computeDt() {
      const raw = clock.getDelta();
      const dt = raw && raw > 0 ? raw : 1 / 60;
      return Math.min(0.033, dt);
    }

    // Lighting
    const hemi = new THREE.HemisphereLight(0xbfd8ff, 0x223344, 0.6);
    scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xffffff, 1.15);
    sun.position.set(-40, 60, 20);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -80;
    sun.shadow.camera.right = 80;
    sun.shadow.camera.top = 80;
    sun.shadow.camera.bottom = -80;
    scene.add(sun);

    // Court setup
    const COURT = {
      length: 78,
      width: 36,
      singlesWidth: 27,
      serviceLine: 21,
      netHeight: 3.5,
    };
    const scale = 0.3;
    const L = COURT.length * scale;
    const W = COURT.singlesWidth * scale;

    // Court texture
    function makeCourtTexture() {
      const px = 2048;
      const py = 4096;
      const c = document.createElement("canvas");
      c.width = px;
      c.height = py;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#19c8f4ff";
      ctx.fillRect(0, 0, px, py);
      ctx.strokeStyle = "#f8fbff";
      ctx.lineWidth = 18;
      ctx.lineCap = "square";
      const padX = (px - px * (W / (COURT.width * scale))) * 0.5;
      const padY = 120;

      function y(z) {
        return padY + ((z + L / 2) * (py - padY * 2)) / L;
      }
      function x(v) {
        return padX + ((v + W / 2) * (px - padX * 2)) / W;
      }

      ctx.strokeRect(
        x(-W / 2),
        y(-L / 2),
        x(W / 2) - x(-W / 2),
        y(L / 2) - y(-L / 2)
      );

      const serviceZ = COURT.serviceLine * scale;
      ctx.beginPath();
      ctx.moveTo(x(-W / 2), y(-serviceZ));
      ctx.lineTo(x(W / 2), y(-serviceZ));
      ctx.moveTo(x(-W / 2), y(serviceZ));
      ctx.lineTo(x(W / 2), y(serviceZ));
      ctx.moveTo(x(0), y(-serviceZ));
      ctx.lineTo(x(0), y(serviceZ));
      ctx.stroke();

      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(x(0) - 0, y(-L / 2));
      ctx.lineTo(x(0) - 0, y(-L / 2) + 40);
      ctx.moveTo(x(0) - 0, y(L / 2));
      ctx.lineTo(x(0) - 0, y(L / 2) - 40);
      ctx.stroke();

      return new THREE.CanvasTexture(c);
    }

    const courtGeom = new THREE.PlaneGeometry(W, L);
    const courtMat = new THREE.MeshStandardMaterial({
      map: makeCourtTexture(),
      roughness: 0.9,
      metalness: 0.0,
    });
    const court = new THREE.Mesh(courtGeom, courtMat);
    court.rotation.x = -Math.PI / 2;
    court.receiveShadow = true;
    scene.add(court);

    // Floor
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 400),
      new THREE.MeshStandardMaterial({ color: 0x0a0e15, roughness: 1 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.02;
    floor.receiveShadow = true;
    scene.add(floor);

    // Net
    const netWidth = W;
    const netH = COURT.netHeight * scale;
    const net = new THREE.Mesh(
      new THREE.BoxGeometry(netWidth, netH, 0.05),
      new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.6,
        metalness: 0.1,
      })
    );
    net.position.set(0, netH / 2, 0);
    net.castShadow = true;
    scene.add(net);
    const netTape = new THREE.Mesh(
      new THREE.BoxGeometry(netWidth, 0.08, 0.075),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
    );
    netTape.position.set(0, netH + 0.04, 0.02);
    netTape.castShadow = true;
    scene.add(netTape);
    function makePlayer(primaryColor = 0xffffff, accent = 0x19c8ff) {
      const g = new THREE.Group();

      // Materials
      const kit = new THREE.MeshStandardMaterial({
        color: primaryColor,
        roughness: 0.85,
        metalness: 0.05,
      });
      const accentMat = new THREE.MeshStandardMaterial({
        color: accent,
        roughness: 0.6,
        metalness: 0.05,
      });
      const skin = new THREE.MeshStandardMaterial({
        color: 0xead1bd,
        roughness: 0.95,
      });

      // Helpers
      const cyl = (rTop, rBot, h, seg = 18) =>
        new THREE.CylinderGeometry(rTop, rBot, h, seg);
      const cap = (r = 0.1, h = 0.3, seg = 16) =>
        new THREE.CapsuleGeometry(r, h, seg, seg);

      // -------- Proportions (roughly human at ~1.75m total) --------
      const shoulderW = 0.58;
      const hipW = 0.38;
      const torsoH = 1.05;
      const legH = 0.95; // thigh+shin (knee in the middle)
      const armH = 0.8; // upper+forearm (elbow in the middle)

      // -------- Core --------
      // Pelvis (slightly wedge-shaped) + torso (rounded box)
      const pelvis = new THREE.Mesh(
        new THREE.BoxGeometry(hipW, 0.25, 0.3),
        kit
      );
      pelvis.castShadow = true;
      pelvis.position.set(0, 1.15, 0);
      g.add(pelvis);

      const torso = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.26, torsoH * 0.45, 12, 18),
        kit
      );
      torso.castShadow = true;
      torso.position.set(0, 1.65, 0);
      g.add(torso);

      // Neck + head (a touch forward)
      const neck = new THREE.Mesh(cyl(0.06, 0.07, 0.1), skin);
      neck.castShadow = true;
      neck.position.set(0, 2.22, 0.02); // tiny forward bias
      g.add(neck);

      const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 18), skin);
      head.castShadow = true;
      head.position.set(0, 2.4, 0.04);
      g.add(head);

      // Optional hair cap (comment out if not wanted)
      const hair = new THREE.Mesh(
        new THREE.SphereGeometry(
          0.205,
          24,
          18,
          0,
          Math.PI * 2,
          0,
          Math.PI * 0.55
        ),
        new THREE.MeshStandardMaterial({ color: 0x30343b, roughness: 0.7 })
      );
      hair.position.copy(head.position);
      hair.castShadow = true;
      g.add(hair);

      // -------- Shoulder & Hip Roots --------
      const shoulder = new THREE.Group();
      shoulder.position.set(0, 2.03, 0);
      g.add(shoulder);

      const hip = new THREE.Group();
      hip.position.set(0, 1.2, 0);
      g.add(hip);

      // ========= ARMS =========
      // Lead (right) arm
      const armLead = new THREE.Group();
      armLead.position.set(+shoulderW / 2, 0, 0);
      shoulder.add(armLead);

      const upperArmLead = new THREE.Mesh(cyl(0.085, 0.095, armH * 0.5), kit);
      upperArmLead.castShadow = true;
      upperArmLead.position.set(0, -(armH * 0.25), 0);
      armLead.add(upperArmLead);

      const elbowLead = new THREE.Group(); // elbow pivot
      elbowLead.position.set(0, -(armH * 0.5), 0);
      armLead.add(elbowLead);

      const forearmLead = new THREE.Mesh(cyl(0.07, 0.085, armH * 0.5), skin);
      forearmLead.castShadow = true;
      forearmLead.position.set(0, -(armH * 0.25), 0);
      elbowLead.add(forearmLead);

      const handLead = new THREE.Mesh(
        new THREE.BoxGeometry(0.11, 0.1, 0.05),
        skin
      );
      handLead.castShadow = true;
      handLead.position.set(0, -(armH * 0.52), 0.02);
      armLead.add(handLead); // attach at end; easy handle for racket

      // Trail (left) arm
      const armTrail = new THREE.Group();
      armTrail.position.set(-shoulderW / 2, 0, 0);
      shoulder.add(armTrail);

      const upperArmTrail = new THREE.Mesh(cyl(0.085, 0.095, armH * 0.5), kit);
      upperArmTrail.castShadow = true;
      upperArmTrail.position.set(0, -(armH * 0.25), 0);
      armTrail.add(upperArmTrail);

      const elbowTrail = new THREE.Group();
      elbowTrail.position.set(0, -(armH * 0.5), 0);
      armTrail.add(elbowTrail);

      const forearmTrail = new THREE.Mesh(cyl(0.07, 0.085, armH * 0.5), skin);
      forearmTrail.castShadow = true;
      forearmTrail.position.set(0, -(armH * 0.25), 0);
      elbowTrail.add(forearmTrail);

      const handTrail = new THREE.Mesh(
        new THREE.BoxGeometry(0.11, 0.1, 0.05),
        skin
      );
      handTrail.castShadow = true;
      handTrail.position.set(0, -(armH * 0.52), 0.02);
      armTrail.add(handTrail);

      // ========= LEGS =========
      // “legL” = player’s right leg; “legR” = player’s left leg (keep your key names)
      const legOffset = hipW / 2;

      const legL = new THREE.Group(); // right leg group
      legL.position.set(+legOffset, 0, 0);
      hip.add(legL);

      const thighL = new THREE.Mesh(cyl(0.11, 0.12, legH * 0.5), kit);
      thighL.castShadow = true;
      thighL.position.set(0, -(legH * 0.25), 0);
      legL.add(thighL);

      const kneeL = new THREE.Group();
      kneeL.position.set(0, -(legH * 0.5), 0);
      legL.add(kneeL);

      const shinL = new THREE.Mesh(cyl(0.09, 0.105, legH * 0.5), kit);
      shinL.castShadow = true;
      shinL.position.set(0, -(legH * 0.25), 0);
      kneeL.add(shinL);

      const footL = new THREE.Mesh(
        new THREE.BoxGeometry(0.28, 0.11, 0.15),
        accentMat
      );
      footL.castShadow = true;
      footL.position.set(0.06, -(legH * 0.52), 0.04);
      footL.rotation.x = THREE.MathUtils.degToRad(8); // toe tilt
      legL.add(footL);

      const legR = new THREE.Group(); // left leg group
      legR.position.set(-legOffset, 0, 0);
      hip.add(legR);

      const thighR = new THREE.Mesh(cyl(0.11, 0.12, legH * 0.5), kit);
      thighR.castShadow = true;
      thighR.position.set(0, -(legH * 0.25), 0);
      legR.add(thighR);

      const kneeR = new THREE.Group();
      kneeR.position.set(0, -(legH * 0.5), 0);
      legR.add(kneeR);

      const shinR = new THREE.Mesh(cyl(0.09, 0.105, legH * 0.5), kit);
      shinR.castShadow = true;
      shinR.position.set(0, -(legH * 0.25), 0);
      kneeR.add(shinR);

      const footR = new THREE.Mesh(
        new THREE.BoxGeometry(0.28, 0.11, 0.15),
        accentMat
      );
      footR.castShadow = true;
      footR.position.set(0.06, -(legH * 0.52), 0.04);
      footR.rotation.x = THREE.MathUtils.degToRad(8);
      legR.add(footR);

      // Shorts overlay to break silhouette
      const shorts = new THREE.Mesh(
        new THREE.BoxGeometry(hipW * 0.95, 0.26, 0.32),
        accentMat
      );
      shorts.castShadow = true;
      shorts.position.set(0, 1.33, 0.01);
      g.add(shorts);

      // ========= Racket on lead hand =========
      const racket = new THREE.Group();
      const grip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.05, 0.35, 16),
        new THREE.MeshStandardMaterial({ color: 0x222222 })
      );
      grip.rotation.z = Math.PI / 2;
      grip.position.set(0.18, -0.02, 0);

      const hoop = new THREE.Mesh(
        new THREE.TorusGeometry(0.22, 0.03, 10, 28),
        new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: 0.35 })
      );
      hoop.rotation.y = Math.PI / 2;
      hoop.position.set(0.42, 0.06, 0);

      racket.add(grip, hoop);
      handLead.add(racket);

      // -------- Natural default pose (subtle bends so it doesn't look rigid) --------
      // External animation still rotates these same groups.
      shoulder.rotation.z = THREE.MathUtils.degToRad(2);
      armLead.rotation.x = THREE.MathUtils.degToRad(-10);
      armTrail.rotation.x = THREE.MathUtils.degToRad(-6);
      legL.rotation.x = THREE.MathUtils.degToRad(4);
      legR.rotation.x = THREE.MathUtils.degToRad(-2);
      torso.rotation.x = THREE.MathUtils.degToRad(-2);
      head.rotation.x = THREE.MathUtils.degToRad(-3);

      // Expose the same handles your code already uses.
      g.userData = {
        torso,
        head,
        hip,
        shoulder,
        legL,
        legR,
        armLead,
        armTrail,
        // Bonus finer controls if you want them later:
        elbowLead,
        elbowTrail,
        kneeL,
        kneeR,
        handLead,
        handTrail,
      };

      return g;
    }

    const playerA = makePlayer(0xffffff, 0x19c8ff);
    const playerB = makePlayer(0x222222, 0xffe47a);
    scene.add(playerA, playerB);

    const START = {
      A: new THREE.Vector3(0, 0, L / 2 - 2.5),
      B: new THREE.Vector3(0, 0, -L / 2 + 2.5),
    };
    playerA.position.copy(START.A);
    playerB.position.copy(START.B);
    playerA.rotation.y = Math.PI;
    playerB.rotation.y = 0;

    // Ball
    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 20, 16),
      new THREE.MeshStandardMaterial({
        color: 0xfff65a,
        emissive: 0x282600,
        roughness: 0.5,
      })
    );
    ball.castShadow = true;
    scene.add(ball);

    // Ball trail
    const trailPool = [];
    const maxTrail = 24;
    const trailMat = new THREE.SpriteMaterial({
      color: 0xffffcc,
      transparent: true,
      opacity: 0.7,
    });
    for (let i = 0; i < maxTrail; i++) {
      const s = new THREE.Sprite(trailMat.clone());
      s.scale.set(0.12, 0.12, 0.12);
      s.material.opacity = 0;
      scene.add(s);
      trailPool.push(s);
    }
    let trailIndex = 0;

    function leaveTrail(pos) {
      const s = trailPool[(trailIndex = (trailIndex + 1) % maxTrail)];
      s.position.copy(pos);
      s.material.opacity = 0.7;
      s.scale.set(0.16, 0.16, 0.16);
      s.userData.life = 0.0;
      s.material.needsUpdate = true;
    }

    function updateTrail(dt) {
      for (const s of trailPool) {
        const life = (s.userData.life || 0) + dt;
        if (s.material.opacity > 0 || life > 0) {
          s.userData.life = life;
          const newOpacity = Math.max(0, 0.7 - s.userData.life * 1.8);
          if (newOpacity !== s.material.opacity) {
            s.material.opacity = newOpacity;
            s.material.needsUpdate = true;
          }
          if (s.material.opacity === 0) {
            s.userData.life = 0;
          }
          s.scale.multiplyScalar(0.995);
        }
      }
    }

    // Rally Timeline
    const shotApices = [1.6, 1.8, 1.5, 1.7, 1.55, 1.75];
    const rngXs = [-1.2, 1.4, 0.6, -0.8, 0.2, -0.3];

    const rally = [];
    const baseZ = L / 2 - 2.8;
    for (let i = 0; i < 6; i++) {
      const fromA = i % 2 === 0;
      const start = new THREE.Vector3(
        fromA ? 0.2 : rngXs[i] * 0.2,
        1.0,
        fromA ? baseZ - 0.6 : -baseZ + 0.6
      );
      const end = new THREE.Vector3(
        rngXs[i],
        0.0,
        fromA ? -baseZ + 0.4 : baseZ - 0.4
      );
      rally.push({ start, end, apex: shotApices[i] });
    }

    let segmentIndex = 0;
    let segmentT = 0;
    let rallyEnded = false;
    let scorer = 0;

    function resetRally() {
      playerA.position.copy(START.A);
      playerB.position.copy(START.B);
      playerA.rotation.y = Math.PI;
      playerB.rotation.y = 0;
      segmentIndex = 0;
      segmentT = 0;
      rallyEnded = false;
      ball.position.copy(rally[0].start);
      for (const s of trailPool) {
        s.material.opacity = 0;
        s.userData.life = 0;
      }
      leaveTrail(ball.position.clone());
    }

    function parabola(p0, p1, h, t) {
      const mid = p0.clone().add(p1).multiplyScalar(0.5);
      mid.y = h;
      const a = p0.clone().multiplyScalar((1 - t) * (1 - t));
      const b = mid.clone().multiplyScalar(2 * (1 - t) * t);
      const c = p1.clone().multiplyScalar(t * t);
      return a.add(b).add(c);
    }

    function animatePlayerTowards(player, target, dt) {
      const speed = 1.8;
      const pos2d = new THREE.Vector2(player.position.x, player.position.z);
      const tgt2d = new THREE.Vector2(target.x, target.z);
      const dir = tgt2d.clone().sub(pos2d);
      const dist = dir.length();
      if (dist > 0.02) {
        dir.normalize();
        pos2d.addScaledVector(dir, Math.min(dist, speed * dt));
        player.position.x = pos2d.x;
        player.position.z = pos2d.y;
      }
      player.rotation.y = Math.atan2(dir.x, dir.y);
      const k = player.userData;
      const t = elapsed * 6;
      k.legL.rotation.x = Math.sin(t) * 0.3;
      k.legR.rotation.x = Math.cos(t) * 0.3;
      k.armLead.rotation.x = Math.cos(t + Math.PI) * 0.25;
      k.armTrail.rotation.x = Math.sin(t + Math.PI) * 0.25;
    }

    function swing(player, phase) {
      const k = player.userData;
      const a = Math.sin(phase * Math.PI);
      k.shoulder.rotation.y = THREE.MathUtils.lerp(-0.8, 1.0, a);
      k.armLead.rotation.z = THREE.MathUtils.lerp(-0.4, 0.6, a);
      k.torso.rotation.y = THREE.MathUtils.lerp(-0.2, 0.2, a);
      k.head.rotation.y = THREE.MathUtils.lerp(-0.3, 0.3, a);
    }

    let localScoreA = 0,
      localScoreB = 0;

    function addPoint(winner) {
      if (winner === 0) localScoreA = Math.min(localScoreA + 1, 4);
      else localScoreB = Math.min(localScoreB + 1, 4);
      setScoreA(localScoreA);
      setScoreB(localScoreB);
      if (localScoreA === 4 || localScoreB === 4) {
        setTimeout(() => {
          localScoreA = 0;
          localScoreB = 0;
          setScoreA(0);
          setScoreB(0);
        }, 1600);
      }
    }

    // Camera setup
    const camRig = new THREE.Object3D();
    scene.add(camRig);
    camera.position.set(12, 7, 18);
    camera.lookAt(0, 1, 0);

    const ANGLES = {
      ORBIT: "Primary Orbit",
      SIDELINE: "Sideline Dolly",
      BASELINE: "Baseline Cam",
      OVERHEAD: "Overhead",
    };

    let cutTimer = 0;
    const CUT_INTERVAL = 8.5;

    function driveCamera(dt) {
      cutTimer += dt;
      const cutPhase = cutTimer % (CUT_INTERVAL + 2.0);
      if (cutPhase < CUT_INTERVAL) setCurrentAngle(ANGLES.ORBIT);
      else {
        const which = Math.floor((cutTimer / (CUT_INTERVAL + 2.0)) % 3);
        setCurrentAngle(
          [ANGLES.SIDELINE, ANGLES.BASELINE, ANGLES.OVERHEAD][which]
        );
      }

      if (currentAngle === ANGLES.ORBIT) {
        const t = elapsed * 0.12;
        const r = 22;
        const h = 8.5;
        const cx = Math.cos(t) * r;
        const cz = Math.sin(t) * r;
        camera.position.lerp(new THREE.Vector3(cx, h, cz), 0.04);
        camera.lookAt(0, 1.0, 0);
      } else if (currentAngle === ANGLES.SIDELINE) {
        const x = Math.sin(elapsed * 0.25) * (W * 0.6);
        const pos = new THREE.Vector3(x, 6.2, 14.5);
        camera.position.lerp(pos, 0.1);
        camera.lookAt(0, 1.2, 0);
      } else if (currentAngle === ANGLES.BASELINE) {
        const z = L / 2 + 5 + Math.sin(elapsed * 0.5) * 1.2;
        camera.position.lerp(new THREE.Vector3(0, 4.5, z), 0.08);
        camera.lookAt(0, 1.1, 0);
      } else if (currentAngle === ANGLES.OVERHEAD) {
        camera.position.lerp(new THREE.Vector3(0, 25, 0.01), 0.1);
        camera.lookAt(0, 0, 0);
      }
    }

    resetRally();

    function updateRally(dt) {
      if (rallyEnded) return;
      const seg = rally[segmentIndex];
      const dur = 0.95;
      segmentT += dt / dur;

      const p = parabola(seg.start, seg.end, seg.apex, Math.min(segmentT, 1));
      ball.position.copy(p);
      leaveTrail(ball.position);

      const hitter = segmentIndex % 2 === 0 ? playerA : playerB;
      const receiver = segmentIndex % 2 === 0 ? playerB : playerA;
      animatePlayerTowards(hitter, seg.start, dt);
      animatePlayerTowards(receiver, seg.end, dt);

      const swingT = Math.max(0, Math.min(1, (segmentT - 0.1) / 0.25));
      swing(hitter, swingT);

      if (segmentT >= 1) {
        segmentIndex++;
        if (segmentIndex >= rally.length) {
          rallyEnded = true;
          scorer = Math.random() < 0.5 ? 0 : 1;
          addPoint(scorer);
          setTimeout(() => {
            resetRally();
          }, 1200);
        } else {
          const next = rally[segmentIndex];
          ball.position.copy(next.start);
          segmentT = 0;
        }
      }
    }

    function step() {
      const dt = computeDt();
      elapsed += dt;
      updateRally(dt);
      updateTrail(dt);
      driveCamera(dt);
      renderer.render(scene, camera);
      lastFrameAt = performance.now();
    }
    renderer.setAnimationLoop(step);

    const intervalId = setInterval(() => {
      if (performance.now() - lastFrameAt > 400) {
        step();
      }
    }, 500);

    function formatTime(d) {
      const pad = (n) => String(n).padStart(2, "0");
      return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
        d.getSeconds()
      )}`;
    }
    const clockIntervalId = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 1000);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const loadingTimeout = setTimeout(() => setLoading(false), 500);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      clearInterval(clockIntervalId);
      clearTimeout(loadingTimeout);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (app && app.contains(renderer.domElement)) {
        app.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "relative", // changed from "fixed"
        width: "1200px", // set your desired width
        height: "700px", // set your desired height
        margin: "auto", // center on page, optional
        overflow: "hidden",
        background:
          "radial-gradient(1200px 600px at 70% 20%, #0b0f16 0%, #05070b 60%, #020307 100%)",
        color: "#e9eef5",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        borderRadius: "18px", // optional, for rounded corners
        boxShadow: "0 8px 40px rgba(0,0,0,0.35)", // optional, for effect
      }}
    >
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      <div
        className="bug"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          letterSpacing: "0.4px",
          fontSize: "12px",
          background: "rgba(10,12,16,0.72)",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: "999px",
          padding: "6px 10px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
          position: "absolute",
          left: 15,
          right: 0,
          top: 15,
          pointerEvents: "none",
          width: "200px",
        }}
      >
        <div
          className="dot"
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: "#28d7ff",
            boxShadow: "0 0 16px #28d7ff",
          }}
        ></div>
        <div>ONTV • Tennis</div>
        <div
          className="clock"
          style={{ opacity: 0.8, fontVariantNumeric: "tabular-nums" }}
        >
          {currentTime}
        </div>
      </div>
      <div
        className="angle-chip"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "rgba(10,12,16,0.72)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "999px",
          padding: "6px 10px",
          fontSize: "12px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
          position: "absolute",
          left: 230,
          right: 0,
          top: 15,
          pointerEvents: "none",
          width: "120px",
        }}
      >
        <div
          className="angle-dot"
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#28d7ff",
            boxShadow: "0 0 16px #28d7ff",
          }}
        ></div>
        <span>{currentAngle}</span>
      </div>
      <div
        className="scoreboard"
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          background: "rgba(10,12,16,0.72)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "14px",
          padding: "8px 10px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
          backdropFilter: "blur(6px)",
          position: "absolute",
          right: 20,
          top: 15,
          pointerEvents: "none",
          width: "210px",
        }}
      >
        <div>
          <div
            className="title"
            style={{
              fontWeight: "800",
              letterSpacing: "0.6px",
              fontSize: "12px",
              textTransform: "uppercase",
              opacity: 0.8,
            }}
          >
            Rally Score
          </div>
          <div
            className="row"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: "10px",
              padding: "6px 8px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="name"
              style={{ fontSize: "14px", fontWeight: "700" }}
            >
              Player A
            </div>
            <div
              className="pts"
              style={{
                fontSize: "16px",
                fontWeight: "900",
                letterSpacing: "0.5px",
                padding: "2px 8px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              {points[scoreA]}
            </div>
          </div>
          <div
            className="row"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: "10px",
              padding: "6px 8px",
              borderRadius: "10px",
              width: "190px",
            }}
          >
            <div
              className="name"
              style={{ fontSize: "14px", fontWeight: "700" }}
            >
              Player B
            </div>
            <div
              className="pts"
              style={{
                fontSize: "16px",
                fontWeight: "900",
                letterSpacing: "0.5px",
                padding: "2px 8px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.06)",
                marginLeft: "auto",
              }}
            >
              {points[scoreB]}
            </div>
          </div>
        </div>
      </div>
      {/* Ticker */}
      <div
        className="ticker"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(90deg, rgba(40,215,255,0.15), rgba(40,215,255,0.03))",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          gap: "22px",
          alignItems: "center",
          padding: "10px 14px",
          fontSize: "12px",
          letterSpacing: "0.3px",
          opacity: 0.9,
        }}
      >
        <span
          className="label"
          style={{
            fontWeight: "800",
            textTransform: "uppercase",
            opacity: 0.75,
          }}
        >
          Angles
        </span>
        <span className="sep" style={{ opacity: 0.3 }}>
          •
        </span>{" "}
        Orbit{" "}
        <span className="sep" style={{ opacity: 0.3 }}>
          •
        </span>{" "}
        Sideline{" "}
        <span className="sep" style={{ opacity: 0.3 }}>
          •
        </span>{" "}
        Baseline{" "}
        <span className="sep" style={{ opacity: 0.3 }}>
          •
        </span>{" "}
        Overhead
      </div>

      {/* Loading */}
      {loading && (
        <div
          className="loading"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#a9b7c6",
            fontSize: "14px",
            letterSpacing: "0.3px",
          }}
        >
          Building scene…
        </div>
      )}
    </div>
  );
};

export default SmartCourt;
