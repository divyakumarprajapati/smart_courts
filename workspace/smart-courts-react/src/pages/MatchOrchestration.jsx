import { Link } from 'react-router-dom'

function MatchOrchestration() {
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Match Orchestration</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Automate rally detection, service validation, and scoring with zero human intervention.
        </p>
      </header>

      <main className="px-6 py-12 max-w-5xl mx-auto space-y-10">
        <section className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">How it works</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
            <li>Vision events trigger a rules engine that models rally state and possession.</li>
            <li>Service legality is evaluated via foot placement, contact height, and timing constraints.</li>
            <li>Out-of-play and faults immediately stop the rally and update the score.</li>
            <li>Integrates with LED scoreboards and mobile apps via WebSocket events.</li>
          </ul>
        </section>

        <section className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Benefits</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
            <li>Consistent, bias-free decisions at recreational and competitive levels.</li>
            <li>Faster games with fewer pauses and disputes.</li>
            <li>Structured data stream for downstream analytics and broadcasts.</li>
          </ul>
        </section>

        <div className="text-center">
          <Link to="/" className="text-blue-400 hover:underline">← Back to Home</Link>
        </div>
      </main>
    </div>
  )
}

export default MatchOrchestration