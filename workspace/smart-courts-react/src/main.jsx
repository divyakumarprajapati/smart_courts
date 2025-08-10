import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComputerVision from './pages/ComputerVision.jsx'
import MatchOrchestration from './pages/MatchOrchestration.jsx'
import PlayerAnalytics from './pages/PlayerAnalytics.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/computer-vision" element={<ComputerVision />} />
        <Route path="/match-orchestration" element={<MatchOrchestration />} />
        <Route path="/player-analytics" element={<PlayerAnalytics />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
