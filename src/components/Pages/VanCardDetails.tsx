import { Link, useParams } from "react-router-dom"
import { Van } from "../../Models/Van"
import '../../styles/VanCardDetail.css'
import { useEffect, useState } from "react"
import useAxiosFetch from "../../services/api/useAxiosFetch"

const VanCardDetails = () => {
    const { id } = useParams()
    const API_URL = `/api/vans/${id}`
    const [van, setVan] = useState<Van | null>(null)
    let color = "#161616"
    if (van !== null) {
        color = van.type === "rugged" ? '#115E59' : van.type === "simple" ? "#E17654" : "#161616"
    }

    const { data } = useAxiosFetch(API_URL)
    useEffect(() => {
        if (id !== undefined && data?.vans) {
            setVan(data?.vans as Van)
        }
    }, [data])

    return (
        <main id="hero-detail">
            <span>
                ← <Link to={'/vans'}>Back to all vans</Link>
            </span>
            {van && 
                <>
                    <div id="detail-img">
                        <img src={van.imageUrl} alt={`${van.name}`} />
                    </div>
                    <div id="detail-content">
                        <button style={{backgroundColor: color}} id="van-type">{van.type}</button>
                        <h1> { van.name } </h1>
                        <h2> ${van.price} <span>/day</span> </h2>
                        <p id="detail-text"> { van.description } </p>
                        <button id="detail-btn"> Rent this van </button>
                    </div>
                </>
            }
        </main>
    )
}

export default VanCardDetails