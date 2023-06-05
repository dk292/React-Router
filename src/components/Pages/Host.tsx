import {  Outlet } from 'react-router-dom'
import '../../styles/Host.css'
import NavigationLink from '../component/NavigationLink'

const Host = () => {

  return (
    <main id="hero-host">
        <ul>
            <li>
              <NavigationLink text='Dashboard' end={true} route='/host'/>
            </li>
            <li>
              <NavigationLink text='Income' route='/host/income'/>
            </li>
            <li>
              <NavigationLink text='Vans' route='/host/vans'/>
            </li>
            <li>
              <NavigationLink text='Reviews' route='/host/reviews'/>
            </li>
        </ul>
        <Outlet />
    </main>
  )
}

export default Host