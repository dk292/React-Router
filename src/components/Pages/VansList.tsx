import { useEffect, useState } from "react"
import { Van } from "../../Models/Van"
import '../../styles/VansList.css'
import VanCard from "../Layouts/VanCard"
import useAxiosFetch from "../../services/api/useAxiosFetch"


const VansList = () => {
  
    const API_URL = "/api/vans"
    const [vansList, setVansList] = useState<Van[] | null>(null)

    const { data } = useAxiosFetch(API_URL)

    useEffect(() => {
        if(data !== null) {
            setVansList(data?.vans as Van[])
        }
    }, [data])

  return (
    <>
        <main id="hero-vans">
            <h1>Explore our van options</h1>
            <ul>
                <li>Simple</li>
                <li>Luxury</li>
                <li>Rugged</li>
                <li>Clear filters</li>
            </ul>
            <div id="van-card-lists">
                {vansList && vansList.map(van => (
                    <VanCard key={van.id} van={van}/>
                ))}
            </div>
        </main>
    </>
  )
}

export default VansList