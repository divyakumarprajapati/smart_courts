import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MatchOrchestration() {
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
          Match Orchestration — Zero Human Intervention
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Automate rally detection, service validation, and scoring for
          seamless, dispute-free gameplay — all in real-time.
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
                Vision events trigger a rules engine modeling rally state &
                possession.
              </li>
              <li>
                Service legality checked via AI analysis of foot placement,
                contact height & timing.
              </li>
              <li>
                Faults & out-of-play instantly stop rallies & update the score.
              </li>
              <li>
                LED scoreboards & mobile apps updated instantly via WebSocket
                events.
              </li>
            </ul>
          </div>
          <motion.img
            src="/match-orchestration-how.png"
            alt="Match orchestration workflow"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </section>

        {/* Benefits */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            src="/match-orchestration-benefits.png"
            alt="Automated match orchestration benefits"
            className="rounded-lg shadow-lg order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Why It’s a Game-Changer</h2>
            <p className="text-gray-300 mb-4">
              With AI-powered match orchestration, we deliver bias-free,
              high-speed officiating and open new doors for player analytics &
              broadcast enhancement.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Sub-second score updates & officiating.</li>
              <li>Flawless accuracy for every rally.</li>
              <li>Seamless scoreboard & broadcast integration.</li>
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

export default MatchOrchestration;
