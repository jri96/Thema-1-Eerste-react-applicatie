// Importeer de afbeelding uit de assets-map
import heroImg from '../assets/hero.png'

// Component dat een afbeelding toont op de pagina
function Afbeelding() {
  return (
    <div>
      {/* Toon de hero-afbeelding met een breedte van 300px en afgeronde hoeken */}
      <img src={heroImg} alt="Hero afbeelding" style={{ width: '300px', borderRadius: '8px' }} />
    </div>
  )
}

export default Afbeelding
