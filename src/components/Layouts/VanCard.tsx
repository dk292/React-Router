import { Link } from "react-router-dom"
import { Van } from "../../Models/Van"
import '../../styles/VanCard.css'

interface Prop {
    van: Van
}

const VanCard = ({van}: Prop) => {
  const color = van.type === "rugged" ? '#115E59' : van.type === "simple" ? "#E17654" : "#161616"
  return (
    <div id="van-card">
      <Link to={`${van.id}`}>
        <div id="van-img-container">
            <img src={van.imageUrl} alt={`${van.name}`} loading="lazy"/>
        </div>
        <div id="content">
          <h2>{van.name}</h2>
          <h2>${van.price}<span id="day">/day</span></h2>
        </div>
        <button style={{backgroundColor: color}} id="van-type">{van.type}</button>
      </Link>
    </div>
  )
}

export default VanCard