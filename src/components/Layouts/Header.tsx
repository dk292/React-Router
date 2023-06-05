import { NavLink } from "react-router-dom"
import '../../styles/Header.css'
import NavigationLink from "../component/NavigationLink"

const Header = () => {

  return (
    <header id="app-header">
      <nav>
        <NavLink to='/' id="app-logo">#VANLIFE</NavLink>
        <ul>
          <li>
            <NavigationLink text="Host" route="/host"/>
          </li>
          <li>
            <NavigationLink text="About" route="/about"/>
          </li>
          <li>
            <NavigationLink text="Vans" route="/vans"/>
          </li>
        </ul>
      </nav>
    </header>   
  )
}

export default Header