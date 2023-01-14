import React from 'react'
import Home from '../home-page/Home'
import { Link } from 'react-router-dom'
import Service from '../service/Service'
// import hammer from '../../images/hammer.png'
import './navbar.css'

function NavBar() {
  const menu = () => {
    const menu = document.querySelector('.menu')
    const navLinks = document.querySelector('.nav_links')
    navLinks.classList.toggle('show')
    menu.classList.toggle('active')
  }

  const link = () => {
    const menu = document.querySelector('.menu')
    const navLinks = document.querySelector('.nav_links')
    navLinks.classList.remove('show')
    menu.classList.remove('active')
  }


  const service = () => {
    const about = document.querySelector('.service-section')
    about.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  return (
    <nav>
      {/* ==== Right Nav ==== */}
      <div className="left_nav">
        <span>TOP LAWYERS</span>
        <hr />
      </div>

      {/* ==== Middle Nav === */}
      <div className="middle_nav">
        <div className="nav_links">
          <ul>
            <li>
            <Link className="link" to="/home">
              Home
            </Link>
            </li>
            <li>
              <Link className="link" to="/about">
              About
            </Link>
            </li>
            <li>
              <Link className="link" to="/contact_us">
                Contact us
              </Link>
            </li>
            <li
              onClick={() => {
                link()
                service()
              }}
            >
              Service
            </li>
            <li
              onClick={() => {
                link()
              }}
            >
              Top-Cases
            </li>
          </ul>
        </div>
      </div>

      {/* ==== Right Nav ==== */}
      <div className="right_nav">
        <div id="nav_appiontement">
            <Link className="link" to="/appointments">
              Appointment
            </Link></div>
        <div id="nav_member">Login</div>
        <div className="menu" onClick={menu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar