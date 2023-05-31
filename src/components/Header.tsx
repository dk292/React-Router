import { Link } from "react-router-dom"
import '../styles/Header.css'

const Header = () => {
  return (
    <header id="app-header">
        <nav>
        <Link to='/' id="app-logo">#VANLIFE</Link>
        <ul>
            <li>
            <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/vans'>Vans</Link>
            </li>
        </ul>
        </nav>
    </header>   
  )
}

export default Header