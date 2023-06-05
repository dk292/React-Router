import { useParams } from "react-router-dom"
import '../../styles/HostVanDetail.css'
import { useUser } from "./HostVanDetail";

const DetailDescription = () => {
  const { name } = useParams()
  const { vanDetail } = useUser()

  return (
    <div id="detail-description">
      { vanDetail && name &&
        name === "pricing" ? <p> ${vanDetail?.price}<span>/day</span> </p>
        : <img src={vanDetail?.imageUrl} alt={vanDetail?.name} />
      }
    </div>
  )
}

export default DetailDescription