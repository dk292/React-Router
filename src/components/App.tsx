import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Layout from "./Layouts/Layout"

import '../server'
import VansList from "./Pages/VansList"
import VanCardDetails from "./Pages/VanCardDetails"
import Host from "./Pages/Host"
import Dashboard from "./Host/Dashboard"
import Income from "./Host/Income"
import Reviews from "./Host/Reviews"
import HostVansList from "./Host/HostVansList"
import HostVanDetail from "./Host/HostVanDetail"
import DetailDescription from "./Host/DetailDescription"
import Description from "./Host/Description"

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home /> }/>
          <Route path="about" element={<About /> }/>
          <Route path="vans" element={<VansList />} />
          <Route path="vans/:id" element={<VanCardDetails />}/>

          <Route path="host" element={<Host />}>

            <Route index  element={<Dashboard />}/>
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVansList />}/>
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<Description />} />
              <Route path=":name" element={<DetailDescription />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />

          </Route>

        </Route>

      </Routes>
    </>
  )
}

export default App
