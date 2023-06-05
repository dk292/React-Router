import { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Van } from "../../Models/Van";
import useAxiosFetch from "../../services/api/useAxiosFetch";
import '../../styles/HostVanDetail.css'
import NavigationLink from "../component/NavigationLink";

type ContextType = { vanDetail: Van | null }

const HostVanDetail = () => {

  const { id } = useParams()
  const API_URL = `/api/host/vans/${id}`
  const [vanDetail, setVanDetail] = useState<Van | null>(null);
  const { data } = useAxiosFetch(API_URL)

  let color = "#161616"
    if (vanDetail !== null) {
        color = vanDetail.type === "rugged" ? '#115E59' : vanDetail.type === "simple" ? "#E17654" : "#161616"
    }
 
  useEffect(() => {
    if (data !== null) {
      setVanDetail(data?.vans as Van)
    }
  }, [data])

  return (
    <main id="host-detail">
      <span >
        ← <Link id="back-to-vans" to={'/host/vans'}>Back to all vans</Link>
      </span>
      {vanDetail && 
        <div id="hero-host-detail">
          <div id="host-detail-header">
            <div id="host-detail-img">
              <img src={vanDetail.imageUrl} alt={vanDetail.name} />
            </div>
            <div id="host-detail-description">
              <i style={{backgroundColor: color}}> {vanDetail.type} </i>
              <h2> {vanDetail.name} </h2>
              <h3> ${vanDetail.price}<span>/day</span> </h3>
            </div>
          </div>
          <ul id="host-detail-links">
            <NavigationLink text="Details" route={`.`} end={true}/>
            <NavigationLink text="Pricing" route="pricing"/>
            <NavigationLink text="Photos"  route="photos"/>
          </ul>
          <Outlet context={{ vanDetail }}/>
        </div>
      }
    </main>
  )
}

export default HostVanDetail

export const useUser = () => {
  return useOutletContext<ContextType>()
}