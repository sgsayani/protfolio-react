import React from 'react'
import './Navbar.css'
import logo from '../../assets/logos.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Protfolio</li>
        <li>Contact</li>
      </ul>
      <div className='nav-connect'>Connect With me</div>

    </div>
  )
}

export default Navbar
