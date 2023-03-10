import React from 'react'
import './navbar.css'
import solidus from '../../assets/icons/logo.svg' 

const Navbar = () => {
  return (
    <nav className='app__navbar  '>
      <div className='app__navbar-logo'>
        <img src={solidus} alt= 'solidus logo' />
      </div>
        <ul className='app__navbar-links '>
            <li>Home</li>
            <li>About</li>
            <li>Roadmap</li>
            <li>Whitepaper</li>
            <li>Games</li>
            <li>contact</li>
            <li>Other</li>
            <div className='flex__list'>
            <li>Connect wallet</li>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar