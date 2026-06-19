import heroImg from '../assets/hero.png'

function Afbeelding() {
  return (
    <div>
      <img src={heroImg} alt="Hero afbeelding" style={{ width: '300px', borderRadius: '8px' }} />
    </div>
  )
}

export default Afbeelding
