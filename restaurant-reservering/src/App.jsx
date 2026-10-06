import Footer from './components/Footer.jsx'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import About from './pages/About.jsx'
import Reservation from './pages/Reservation.jsx'
import Contact from './pages/Contact.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/over-ons" element={<About />} />
        <Route path="/reserveren" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App