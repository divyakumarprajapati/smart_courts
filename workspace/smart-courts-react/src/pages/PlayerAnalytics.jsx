import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PlayerAnalytics() {
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
          Player Analytics
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Actionable insights from movement, shots, and tactics — empowering
          players and coaches to improve with data-backed precision.
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
                Trajectory clustering and rally segmentation for shot labeling.
              </li>
              <li>
                Pose features quantify footwork, reach, and recovery times.
              </li>
              <li>Heatmaps highlight player strengths and weaknesses.</li>
              <li>Performance benchmarking against skill tiers & history.</li>
              <li>Interactive dashboards update in near real-time.</li>
            </ul>
          </div>
          <motion.img
            src="/player-analysis.png"
            alt="Player analytics process diagram"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </section>

        {/* Benefits */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            src="/player-analytics-benefits.png"
            alt="Player analytics benefits illustration"
            className="rounded-lg shadow-lg order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Benefits</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Objective, data-driven feedback for improvement.</li>
              <li>Customized training plans from performance trends.</li>
              <li>Shareable reports for coaches and recruiters.</li>
              <li>Integration-ready APIs for apps & broadcasts.</li>
              <li>Faster identification of strengths & weak spots.</li>
            </ul>
          </div>
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

export default PlayerAnalytics;
