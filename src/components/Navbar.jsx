import React from 'react'
import './style/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assest/logo.png'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img className='navbar-logo' src={logo} alt="" />
      </div>
      <div className="navbar-links">
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  )
}

export default Navbar