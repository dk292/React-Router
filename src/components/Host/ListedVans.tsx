import { Link } from 'react-router-dom'
import '../../styles/ListedVans.css'

interface Prop {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    isEdit?: boolean
}

const ListedVans = ({ id, name, imageUrl, price, isEdit }: Prop) => {
  return (
    <Link to={`${id}`}>
      <div id="van-list">
          <div id="van-left">
            <div id="van-image">
                <img src={imageUrl} alt={name} />
            </div>
            <div id="van-content">
                <h2> {name} </h2>
                <h3> ${price}/day </h3>
            </div>
          </div>
          {isEdit && <div id="van-right">
            <p>Edit</p>
          </div>}
      </div>
    </Link>
  )
}

export default ListedVans