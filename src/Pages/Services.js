import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import './services.css'
import { SERVICECARDITEM } from '../serviceCardItem'
const Services = () => {
  return (
    <div className='services'>
      <div className='carditem'>
     {SERVICECARDITEM.map((item,index)=>(
                <ServiceCard  key={index}{...item} />
            ))}
       </div>
    </div>
  )
}

export default Services
