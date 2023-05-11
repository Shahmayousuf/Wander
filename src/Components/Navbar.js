import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";
import { Button } from "./Button";
// import Button from "./Button";



const Navbar = () => {
  const [click, setClick] = useState(false);
  const[button,setButton]=useState(true)
  const handleClick=()=>{
    setClick(!click)
  }
  
  const closeMobileMenu=()=>{
    setClick(false)
  }

   const ShowButton=()=>{
   if(window.innerWidth<=960){
    setButton(false)
   }
    else{
      setButton(true)
    
   }
  }
  useEffect(()=>{
   ShowButton()
  },[])
  window.addEventListener('resize',ShowButton)

  return (
    <>
      <nav  className="navbar" id="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            Wander <i class="fab fa-typo3"></i>
          </div>
           <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times':'fas fa-bars'}></i>
           </div>
           <ul className={click?'nav-menu active':'nav-menu'}>
             <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
             </li>
             <li className="nav-item">
              <Link to='' className="nav-links" onClick={closeMobileMenu}>Services</Link>
             </li>
             
             <li className="nav-item">
              <Link to='' className="nav-links" onClick={closeMobileMenu}>Products</Link>
             </li>
             <li className="nav-item">
              <Link to='' className="nav-links-mobile" onClick={closeMobileMenu}>SignUp</Link>
             </li>
           </ul>
           {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
