import React from 'react'
import Herosection from '../Components/Herosection'
import Navbar from '../Components/Navbar'
import '../App.css'
import Card from '../Components/Card'

const Home = () => {
  return (
    <div>
      <Navbar/>
     <Herosection/>
     <Card/>
    </div>
  )
}

export default Home
