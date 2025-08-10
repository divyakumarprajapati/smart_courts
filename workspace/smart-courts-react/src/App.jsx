import SmartCourt from "./components/SmartCourt.jsx";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* NAV */}
      <nav className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold">
            SC
          </div>
          <div>
            <div className="text-sm font-semibold">Smart Courts</div>
            <div className="text-xs text-gray-400">
              AI-Powered Sports Referee
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a className="text-gray-300 hover:text-white" href="#how">
            How it works
          </a>
          <a className="text-gray-300 hover:text-white" href="#market">
            Market
          </a>
          <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500">
            Apply for Pilot
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="max-w-4xl text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 glow">
            Revolutionizing Sports with AI-Powered Smart Courts
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            No referees. No interruptions. Just fair play — powered by computer
            vision and real-time orchestration.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
              Join Early Access
            </button>
            <button className="border border-gray-600 px-6 py-3 rounded-lg text-gray-200 hover:bg-white/5 transition">
              Book a Demo
            </button>
          </div>
        </div>
      </header>

      {/* Problem & Solution */}
      <section id="how" className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Problem & Solution
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10">
            Sports still rely on fallible human referees and manual
            scorekeeping. Smart Courts automates match arbitration, orchestrates
            rallies, and provides coaching-grade analytics — all from a simple
            camera setup.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/computer-vision"
              className="bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition text-left block"
            >
              <img
                src="/3d-court-illustration.png"
                alt="AI Referee"
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="font-bold text-xl mb-2">AI Referee</h3>
              <p className="text-gray-300">
                Real-time computer vision analysis of live games for precise
                ball and player tracking, accurate line-in/out judgments, and
                automated foul detection.
              </p>
            </Link>

            <Link
              to="/match-orchestration"
              className="bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition text-left block"
            >
              <img
                src="/match-orchestrations.png"
                alt="Match Orchestration"
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="font-bold text-xl mb-2">Match Orchestration</h3>
              <p className="text-gray-300">
                AI-powered automation to seamlessly start or stop rallies,
                manage game flow, and update scoreboards in real time — no human
                intervention required.
              </p>
            </Link>

            <Link
              to="/player-analytics"
              className="bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition text-left block"
            >
              <img
                src="/plater-analytics-thumb.png"
                alt="Player Analytics"
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="font-bold text-xl mb-2">Player Analytics</h3>
              <p className="text-gray-300">
                In-depth AI-driven insights including movement heatmaps, shot
                reaction time analysis, and smart tactical recommendations for
                coaches and players.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Market */}
      <section id="market" className="py-16 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Market Opportunity
          </h2>
          <p className="text-gray-300 mb-8">
            The sports technology market is booming. Our initial target:
            badminton & tennis clubs, training academies, and indoor sports
            centers — where cost-effective automation creates immediate ROI.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gray-800 p-6 rounded-xl w-56">
              <div className="text-3xl font-extrabold text-blue-400">$24B</div>
              <div className="text-gray-400 text-sm mt-1">
                Sports Tech Market (2024)
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl w-56">
              <div className="text-3xl font-extrabold text-green-400">13%</div>
              <div className="text-gray-400 text-sm mt-1">Projected CAGR</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl w-56">
              <div className="text-3xl font-extrabold text-purple-400">
                12K+
              </div>
              <div className="text-gray-400 text-sm mt-1">
                Courts in India (target initial market)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Court Section */}
      <section className="py-12 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Experience the Smart Court
          </h2>
          <p className="text-center text-gray-300 mb-6">
            Interactive demo showing ball tracking, rally orchestration and live
            score updates.
          </p>
          <SmartCourt />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-gradient-to-br from-blue-700 to-indigo-600 text-center">
        <h3 className="text-2xl font-bold mb-3">
          Ready to automate your court?
        </h3>
        <p className="text-gray-100 mb-6">
          Apply for pilot programs and get early adopter benefits.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-black/80 px-6 py-3 rounded-md font-semibold">
            Apply for Pilot Program
          </button>
          <button className="border border-white/20 px-6 py-3 rounded-md">
            Contact Sales
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-950 text-center text-gray-400 text-sm">
        © 2025 Smart Courts. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
