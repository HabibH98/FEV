import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className="hero-section">
        <h1>Welkom bij Mijn Restaurant</h1>

        <p>
          Geniet van heerlijk eten in een gezellige sfeer.
          Reserveer eenvoudig online een tafel.
        </p>

        <Link to="/reserveren" className="reserve-button">
          Reserveer een tafel
        </Link>
      </section>
    </main>
  )
}

export default Home