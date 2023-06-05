import { useEffect, useState } from 'react'
import useAxiosFetch from '../../services/api/useAxiosFetch'
import '../../styles/HostDashboard.css'
import ListedVans from './ListedVans'
import { Van } from '../../Models/Van'
import star from '../../assets/star.svg'

const Dashboard = () => {
  const API_URL = "/api/host/vans"
  const [vans, setVans] = useState<Van[] | null>(null)

  const { data } = useAxiosFetch(API_URL)

  useEffect(() => {
    setVans(data?.vans as Van[])
  }, [data])

  return (
    <main id="host-dashboard">
      <div id='dashboard-main'>
        <div id="dashboard-content">
          <h3>Welcome</h3>
          <p>Income last <span>30 days</span></p>
          <h2>$2,260</h2>
        </div>
        <div id='dashboard-detail'>
          <a>Details</a>
        </div>
      </div>
      <div id="dashboard-review">
        <h2>Review score </h2>
        <span><img src={star} alt='star svg'/> 5.0/<i>5</i></span>
        <div id='dashboard-detail'>
          <a>Details</a>
        </div>
      </div>
      <div id='dashboard-listed-van'>
        <div id="head-bar">
          <h2>You listed van</h2>
          <a>View all</a>
        </div>
        {vans && vans.map(van => (
          <ListedVans key={van.id} id={van.id} name={van.name} imageUrl={van.imageUrl} price={van.price} isEdit={true}/>
        ))}
      </div>
    </main>
  )
}

export default Dashboard