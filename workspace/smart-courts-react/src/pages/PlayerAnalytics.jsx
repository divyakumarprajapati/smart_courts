import { Link } from 'react-router-dom'

function PlayerAnalytics() {
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Player Analytics</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Actionable insights from movement, shots, and tactics for players and coaches.
        </p>
      </header>

      <main className="px-6 py-12 max-w-5xl mx-auto space-y-10">
        <section className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">How it works</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
            <li>Trajectory clustering and rally segmentation produce shot labels and patterns.</li>
            <li>Pose features quantify footwork, reach, and recovery times.</li>
            <li>Heatmaps and pressure zones highlight strengths and vulnerabilities.</li>
            <li>Insights are benchmarked against skill tiers and historical performance.</li>
          </ul>
        </section>

        <section className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Benefits</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
            <li>Objective feedback loops for training and match preparation.</li>
            <li>Shareable reports for players, coaches, and recruiters.</li>
            <li>APIs for third-party apps and broadcast overlays.</li>
          </ul>
        </section>

        <div className="text-center">
          <Link to="/" className="text-blue-400 hover:underline">← Back to Home</Link>
        </div>
      </main>
    </div>
  )
}

export default PlayerAnalytics