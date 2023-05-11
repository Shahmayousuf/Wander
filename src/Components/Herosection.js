import React from "react";

import "./Herosection.css";
import "./Button.css";
import { Button } from "./Button";
  
const Herosection = () => {
  return (
    <div className="hero-container">
      <video src="/Vedio/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      {/* <div className='hero-btns'>
      <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hello')}
        >
          WATCH LATER<i className='far fa-play-circle'></i></Button>
      </div> */}
      <div className="hero-btns">
      
      <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn-white"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH LATER<i className="far fa-play-circle"></i>
        </Button>
        {/* <button className='btn btn--primary btn--large'>WATCH LATER</button> */}

      </div>
    </div>
  );
};

export default Herosection;
