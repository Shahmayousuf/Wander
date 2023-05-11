import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import { CARDITEMS } from '../CardItems';

const Card = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {CARDITEMS.map((item, index) => (
              <CardItem key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
