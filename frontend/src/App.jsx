import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PortfolioSelector from './components/PortfolioSelector'
import ProfessionalPortfolio from './components/ProfessionalPortfolio'
import VideoEditingPortfolio from './components/VideoEditingPortfolio'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioSelector />} />
        <Route path="/professional" element={<ProfessionalPortfolio />} />
        <Route path="/video-editing" element={<VideoEditingPortfolio />} />
      </Routes>
    </Router>
  )
}

export default App
