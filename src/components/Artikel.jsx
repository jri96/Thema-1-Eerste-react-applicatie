// Component dat een artikel weergeeft met een titel en tekst
// Ontvangt twee props: titel (titel van artikel) en tekst (inhoud van artikel)
function Artikel({ titel, tekst }) {
  return (
    <div>
      {/* Toon de titel als een grote vetgedrukte heading */}
      <h2>{titel}</h2>
      {/* Toon de tekst als een paragraaf */}
      <p>{tekst}</p>
    </div>
  )
}

export default Artikel
