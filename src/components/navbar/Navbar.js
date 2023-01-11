import React from 'react'
import Home from '../home/Home'
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

    const homeSection = () => {
        const home = document.querySelector('.home_page')
        home.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }

    const aboutSection = () => {
        const about = document.querySelector('.about_section')
        about.scrollIntoView({ behavior: 'smooth', block: 'end'})
    }
    const contact_us = () => {
        const about = document.querySelector('.contact-us-container')
        about.scrollIntoView({ behavior: 'smooth', block: 'end'})
    }
    const service = () => {
        const about = document.querySelector('.service-section')
        about.scrollIntoView({ behavior: 'smooth', block: 'end'})
    }


  return (
    <nav>
        {/* ==== Right Nav ==== */}
        <div className='left_nav' >
                <span>TOP LAWYERS</span>
            <hr/>
        </div>

        {/* ==== Middle Nav === */}
        <div className='middle_nav'>
            <div className='nav_links'>
                <ul>
                    <li onClick={ () => {link(); homeSection();}}>Home</li>
                    <li onClick={ () => {link(); aboutSection(); }}>About</li>
                    <li onClick={ () => {link(); contact_us(); }}>Contact Us</li>
                    <li onClick={ () => {link(); service()}}>Service</li>
                    <li onClick={ () => {link(); }}>Top-Cases</li>
                </ul>
            </div>
        </div>
        
        {/* ==== Right Nav ==== */}
        <div className='right_nav'>
            <div id='nav_appiontement'>APPOINTEMENT</div>
            {/* <div id='nav_member'>BECAME A MEMBER</div> */}
            <div className='menu' onClick={menu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </div>
    </nav>
  )
}

export default NavBar