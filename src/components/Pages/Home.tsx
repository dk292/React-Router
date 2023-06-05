import { Link } from 'react-router-dom'
import '../../styles/Hero.css'

const Home = () => {
  return (
    <div id="hero-home">
        <h1 id='hero-header'>You got the travel plans, we got the travel vans.</h1>
        <p id='hero-text'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button id="hero-btn">
          <Link to='/vans'>Find your van</Link>
        </button>
    </div>
  )
}

export default Home