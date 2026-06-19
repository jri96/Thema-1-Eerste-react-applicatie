// Importeer de componenten die we nodig hebben
import Artikel from './components/Artikel'
import Afbeelding from './components/Afbeelding'

// Tekst die in elk artikel wordt getoond (Lorem ipsum)
const loremTekst = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut ea reprehenderit unde quisquam doloremque ducimus assumenda magnam praesentium, similique asperiores corrupti maiores, quis minima molestiae eum id cum iusto."

// Hoofdcomponent van de app
function App() {
  return (
    <>
      {/* Toon de afbeelding via het Afbeelding-component */}
      <Afbeelding />
      {/* Toon 3 artikelen met elk een titel en dezelfde Lorem ipsum tekst */}
      <Artikel titel="Artikel 1" tekst={loremTekst} />
      <Artikel titel="Artikel 2" tekst={loremTekst} />
      <Artikel titel="Artikel 3" tekst={loremTekst} />
    </>
  )
}

export default App
