import { Link } from 'react-router-dom'

function ComputerVision() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold">SC</div>
          <div>
            <div className="text-sm font-semibold">Smart Courts</div>
            <div className="text-xs text-gray-400">AI-Powered Sports Referee</div>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <a className="text-gray-300 hover:text-white" href="/#how">How it works</a>
          <a className="text-gray-300 hover:text-white" href="/#market">Market</a>
          <Link to="/" className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500">Home</Link>
        </div>
      </nav>

      <header className="py-16 px-6 text-center bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Computer Vision Analysis</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Real-time detection of ball, players, lines, and fouls using multi-camera vision and on-device inference.
        </p>
      </header>

      <main className="px-6 py-12 max-w-5xl mx-auto space-y-10">
        <section className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">How it works</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
            <li>Multi-view cameras capture the court at 60–120 FPS with synchronized timestamps.</li>
            <li>On-device models perform player pose estimation and ball trajectory detection with latency under 30 ms.</li>
            <li>Homography maps detections to the court plane for precise line in/out decisions.</li>
            <li>Temporal logic infers fouls (net touch, foot faults, double hits) with confidence scoring.</li>
            <li>Edge compute streams structured events; video remains local for privacy.</li>
          </ul>
        </section>

        <section className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Why it benefits other modules</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
            <li><span className="font-semibold">Match Orchestration</span>: Reliable rally start/stop from ball-state and contact events.</li>
            <li><span className="font-semibold">Player Analytics</span>: High-fidelity movement tracks and shot labels enable deeper insights.</li>
            <li><span className="font-semibold">Scoreboards</span>: Deterministic point outcomes from vision events.</li>
            <li><span className="font-semibold">Coaching Tools</span>: Pose/kinematics drive technique analysis and recommendations.</li>
          </ul>
        </section>

        <div className="text-center">
          <Link to="/" className="text-blue-400 hover:underline">← Back to Home</Link>
        </div>
      </main>
    </div>
  )
}

export default ComputerVision