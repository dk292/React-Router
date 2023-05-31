import '../styles/About.css'
import image from '../assets/image2.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div id='hero-about'>
      <div id="about-img">
        <img src={image} alt="a man sitting on the car" />
      </div>
      <div id="about-content">
        <h2 id='about-header'>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p id='about-text'>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div id='about-explore'>
          <p>Your destination is waiting. Your van is ready.</p>
          <Link id='link-button' to="/vans">Explore our vans</Link>
        </div> 
      </div>
    </div>
  )
}

export default About