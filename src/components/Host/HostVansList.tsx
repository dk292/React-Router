import { useEffect, useState } from "react"
import { Van } from "../../Models/Van"
import ListedVans from "./ListedVans"
import '../../styles/HostVansList.css'
import useAxiosFetch from "../../services/api/useAxiosFetch"

const HostVansList = () => {
  const API_URL = "/api/host/vans"
  const [vans, setVans] = useState<Van[] | null>(null)

  const { data } = useAxiosFetch(API_URL)

  useEffect(() => {
    setVans(data?.vans as Van[])
  }, [data])

  return (
    <div id="listed-van">
      <h2 id="listed-van-title">Your listed vans</h2>

      {vans && vans.map(van => (
        <ListedVans key={van.id} id={van.id} name={van.name} imageUrl={van.imageUrl} price={van.price}/>
      )) }
    </div>
  )
}

export default HostVansList