import React from 'react'
import './App.css'
import './Header.css'

export default function Header() {
  return (
    <div>
      <header>
        <nav id='navbar'>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="header-content">
          <h1>This is Header.</h1>
          <div className="box" id="box1">

          </div>
        </div>
      </header>
    </div>
  )
}
