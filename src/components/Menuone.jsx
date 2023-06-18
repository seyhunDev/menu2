import React from 'react'
import './style/Menu.css'
import { Link } from 'react-router-dom'
import margharitta1 from '../assest/pizza/margharitta1.png'
import imgpizza from '../assest/menu/pizza.png'
import imgdrinks from '../assest/menu/drinks.png'
import imgpasta from '../assest/menu/pasta.png'
import imgdessert from '../assest/menu/dessert.png'

function Menuone() {
  return (
    <div className='main-container2'>
        
        <div className='link-box'>
        <Link to='/menuone' className='link'>
            <div className="sub-container3">
                <img className='img3' src={imgpizza} alt="Pizza" /> 
            </div> 
        </Link>
        <Link to='/about' className='link'>
            <div className="sub-container3">
                <img className='img3' src={imgdrinks} alt="Pizza" /> 
            </div>
        </Link>
        <Link to='/menuone' className='link'>
            <div className="sub-container3">
                <img className='img3' src={imgpasta} alt="Pizza" /> 
            </div>
        </Link>
        <Link to='/menuone' className='link'>
            <div className="sub-container3">
                <img className='img3' src={imgdessert} alt="Pizza" /> 
            </div>
        </Link>
        </div>

       
    <Link to='' className='link'>
      <div className="sub-container2">
        <img className='img2' src={margharitta1} alt="Image 1" />
      </div>
    </Link>
    <Link to='' className='link'>
      <div className="sub-container2">
      <img className='img2' src={margharitta1} alt="Image 1" />
         
      </div>
    </Link>
    <Link to='' className='link'>
      <div className="sub-container2">
      <img className='img2' src={margharitta1} alt="Image 1" />        
      </div>
    </Link>
    <Link to='' className='link'>
      <div className="sub-container2">
      <img className='img2' src={margharitta1} alt="Image 1" />        
      </div>
    </Link>
    <Link to='' className='link'>
      <div className="sub-container2">
      <img className='img2' src={margharitta1} alt="Image 1" />        
      </div>
    </Link>
    <Link to='' className='link'>
      <div className="sub-container2">
      <img className='img2' src={margharitta1} alt="Image 1" />        
      </div>
    </Link>
   
   
  
    
    </div>
  )
}

export default Menuone