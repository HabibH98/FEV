import { useState } from 'react'

function Reservation() {
  const [bevestigd, setBevestigd] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setBevestigd(true)
  }

  return (
    <main className="reservation-page">
      <h1>Reserveer een tafel</h1>
      <p>Vul hieronder je gegevens in om een tafel te reserveren.</p>

      {bevestigd ? (
        <div className="confirmation">
          <h2>Reservering ontvangen!</h2>
          <p>Bedankt voor je reservering. We zien je graag in ons restaurant.</p>
        </div>
      ) : (
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label>
            Naam
            <input type="text" name="naam" required />
          </label>

          <label>
            E-mail
            <input type="email" name="email" required />
          </label>

          <label>
            Datum
            <input type="date" name="datum" required />
          </label>

          <label>
            Tijd
            <input type="time" name="tijd" required />
          </label>

          <label>
            Aantal personen
            <input
              type="number"
              name="personen"
              min="1"
              max="12"
              required
            />
          </label>

          <button type="submit">Reserveren</button>
        </form>
      )}
    </main>
  )
}

export default Reservation