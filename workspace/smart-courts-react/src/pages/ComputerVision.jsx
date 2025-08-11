import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ComputerVision() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold">
            SC
          </div>
          <div>
            <div className="text-sm font-semibold">Smart Courts</div>
            <div className="text-xs text-gray-400">
              AI-Powered Sports Referee
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <a className="text-gray-300 hover:text-white" href="/#how">
            How it works
          </a>
          <a className="text-gray-300 hover:text-white" href="/#market">
            Market
          </a>
          <Link
            to="/"
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500"
          >
            Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-16 px-6 text-center bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Cutting-Edge Computer Vision Analysis
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Real-time AI vision system that tracks every ball, player, and
          boundary with sub-second accuracy — enabling automated refereeing,
          match orchestration, and next-generation sports analytics.
        </motion.p>
      </header>

      {/* Main Sections */}
      <main className="px-6 py-12 max-w-6xl mx-auto space-y-16">
        {/* How it works */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
              <li>
                Multi-view cameras capture 60–120 FPS with synchronized
                timestamps.
              </li>
              <li>
                On-device AI performs pose estimation & ball tracking in under
                30 ms.
              </li>
              <li>
                Homography mapping ensures precise in/out boundary detection.
              </li>
              <li>Temporal logic identifies fouls with confidence scoring.</li>
              <li>
                Edge compute streams structured events securely, keeping video
                local.
              </li>
            </ul>
          </div>
          <motion.img
            src="/3d-court-illustration.png"
            alt="How it works diagram"
            className="rounded-lg shadow-lg w-full h-72 md:h-96 object-contain"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </section>

        {/* Game changer */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            src="/game-changer.png"
            alt="3D AI referee concept"
            className="rounded-lg shadow-lg order-2 md:order-1 w-full h-72 md:h-96 object-contain"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Why It’s a Game-Changer</h2>
            <p className="text-gray-300 mb-4">
              By combining low-latency edge AI with high-fidelity tracking, we
              eliminate human bias, speed up officiating, and unlock entirely
              new layers of insight for coaches, broadcasters, and fans.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Sub-second decision-making for professional-level accuracy.
              </li>
              <li>Scalable from pro leagues to grassroots sports.</li>
              <li>
                Modular integration with any scoreboard or broadcast system.
              </li>
            </ul>
          </div>
        </section>

        {/* Beyond Sports */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Beyond Sports — Future Expansion
            </h2>
            <p className="text-gray-300 mb-4">
              Our AI vision tech can revolutionize multiple industries, opening
              B2B revenue streams far beyond sports.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Manufacturing: Instant defect detection.</li>
              <li>Manufacturing: Automated quality checks.</li>
              <li>Security: Live threat alerts.</li>
              <li>Security: Suspicious activity recognition.</li>
              <li>Retail: Heatmaps for customer movement.</li>
              <li>Retail: Queue length tracking.</li>
              <li>Traffic: Real-time congestion alerts.</li>
              <li>Traffic: Pedestrian safety monitoring.</li>
              <li>Healthcare: Posture tracking for rehab.</li>
              <li>Healthcare: Patient fall detection.</li>
            </ul>
          </div>
          <motion.img
            src="/industry-expansion-2D.png"
            alt="Cross-industry use cases"
            className="rounded-lg shadow-lg w-full h-72 md:h-96 object-contain"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </section>

        {/* Back link */}
        <div className="text-center">
          <Link to="/" className="text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

export default ComputerVision;
