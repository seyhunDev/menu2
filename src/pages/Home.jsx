import React from 'react'
import './homestyles/Home.css'
import { Link } from 'react-router-dom'
import imgpizza from '../assest/menu/pizza.png'
import imgdrinks from '../assest/menu/drinks.png'
import imgpasta from '../assest/menu/pasta.png'
import imgdessert from '../assest/menu/dessert.png'



function Home() {
  return (
    <div className="main-container">
      <Link to='/menuone' className='link'>
      <div className="sub-container">
        <img src={imgpizza} alt="Pizza" />
        
      </div>
      </Link>
      <Link to='/menudr' className='link'>
      <div className="sub-container">
        <img src={imgdrinks} alt="" />
        
      </div>
      </Link>
      <Link to='/pasta' className='link'>
      <div className="sub-container">
      <img src={imgpasta} alt="" />

      </div>
      </Link>
      <Link to='/dessert' className='link'>

      <div className="sub-container">
      <img src={imgdessert} alt="" />
        
        
      </div>
      </Link>
      
    </div>
  )
}

export default Home