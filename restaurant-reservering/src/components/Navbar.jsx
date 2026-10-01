import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <h2>Mijn Restaurant</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/over-ons">Over ons</Link></li>
        <li><Link to="/reserveren">Reserveren</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar