const gerechten = [
  {
    id: 1,
    naam: 'Margherita Pizza',
    beschrijving: 'Pizza met tomatensaus, mozzarella en basilicum.',
    prijs: 12.50,
     categorie: 'Pizza',
  },
  {
    id: 2,
    naam: 'Pasta Carbonara',
    beschrijving: 'Pasta met romige saus, ei en Parmezaanse kaas.',
    prijs: 14.50,
      categorie: 'Pasta',
  },
  {
    id: 3,
    naam: 'Caesar Salad',
    beschrijving: 'Salade met kip, sla, Parmezaanse kaas en dressing.',
    prijs: 11.50,
    categorie: 'salade',
  },
]

function Menu() {
  return (
    <main>
      <h1>Menukaart</h1>
      <p>Bekijk hier onze gerechten.</p> 

      <div className="menu-list">
        {gerechten.map((gerecht) => (
          <div className="menu-item" key={gerecht.id}>
            <h2>{gerecht.naam}</h2>
            <p>{gerecht.beschrijving}</p>
            <p>€ {gerecht.prijs.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Menu
