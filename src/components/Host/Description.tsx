import '../../styles/HostVanDetail.css'
import { useUser } from "./HostVanDetail"

const Description = () => {

  const { vanDetail } = useUser()

  return (
    <>
      {vanDetail && 
        <div id="description">
          <h2>Name: <span>{vanDetail.name}</span></h2>
          <h2>Category: <span>{vanDetail.type}</span></h2>
          <h2>Description: <span>{vanDetail.description}</span></h2>
          <h2>Visibility: <span>Public</span></h2>
        </div>
      }
    </>
  )
}

export default Description