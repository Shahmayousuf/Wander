import React from 'react'
import CardItem from './CardItem'
import './Card.css'
const Card = () => {
  return (
    <div className='cards'>
    <h1>Check out these EPIC Destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
          <CardItem/>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
