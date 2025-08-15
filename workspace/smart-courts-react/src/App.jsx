import { useState } from "react";
import SmartCourt from "./components/SmartCourt.jsx";
import { Link } from "react-router-dom";

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5001/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });
    const data = await res.json();
    setForm({ name: "", email: "", message: "" });
  };
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
          <button
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500"
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("contact").offsetTop,
                behavior: "smooth",
              })
            }
          >
            Contact Us
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
          {/* <div className="flex justify-center gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
              Join Early Access
            </button>
            <button className="border border-gray-600 px-6 py-3 rounded-lg text-gray-200 hover:bg-white/5 transition">
              Book a Demo
            </button>
          </div> */}
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
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto relative">
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
      <section id="contact" className="py-16 px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4">
              Ready to automate your court?
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-400 space-y-2 max-w-lg mx-auto text-left">
              <li>Get instant match insights powered by AI</li>
              <li>Reduce referee errors with real-time decisioning</li>
              <li>Save time with automated game orchestration</li>
              <li>Unlock player performance analytics for better coaching</li>
            </ul>
          </div>

          {/* Right Contact Form */}
          <div className="flex-1 p-6 rounded-lg shadow-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-md bg-[#0d1117] border border-gray-700 text-white focus:outline-none focus:border-indigo-500"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-md bg-[#0d1117] border border-gray-700 text-white focus:outline-none focus:border-indigo-500"
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Comments
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message..."
                  className="w-full px-4 py-2 rounded-md bg-[#0d1117] border border-gray-700 text-white focus:outline-none focus:border-indigo-500"
                  name="message"
                  onChange={handleChange}
                  value={form.message}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 py-2 rounded-md font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center text-gray-400 text-sm">
        © 2025 Smart Courts. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
