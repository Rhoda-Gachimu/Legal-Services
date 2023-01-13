import React from 'react'
// import Home from '../home-page/Home'
// import hammer from '../../images/hammer.png'
import { Link } from 'react-router-dom'
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

    // ==== Links ScrollInteoView =====
    const homeSection = () => {
        const home = document.querySelector('.home_page')
        home.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'})
    }

    const aboutSection = () => {
        const about = document.querySelector('.about_section')
        about.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'})
    }

    const serviceSection = () => {
        const service = document.querySelector('.service-section')
        service.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'})
    }

    const casesSection = () => {
        const cases = document.querySelector('.cases-section')
        cases.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'})
    }

    // Check The Url

    function appointmentLink() {
        window.scrollTo(0, 0)
    }


  return (
    <nav>
        {/* ==== Right Nav ==== */}
        <div className='left_nav' >
                <span onClick={() => {homeSection();}}>
                    <Link to='/'>TOP LAWYERS</Link>
                </span>
            <hr/>
        </div>

        {/* ==== Middle Nav === */}
        <div className='middle_nav'>
            <div className='nav_links'>
                <ul>
                    <li onClick={() => {link(); homeSection() }}><Link to='/'>Home</Link></li>
                    <li onClick={() => {link(); aboutSection() }}><Link to='/'>About</Link></li>
                    <li onClick={() => {link(); serviceSection() }}><Link to='/'>Service</Link></li>
                    <li onClick={() => {link(); casesSection() }}><Link to='/'>Top-Cases</Link></li>
                </ul>
            </div>
        </div>
        
        {/* ==== Right Nav ==== */}
        <div className='right_nav'>
            <Link to='/appointment' onClick={appointmentLink} >
                <div id='nav_appiontement'>
                    APPOINTEMENT
                </div>
            </Link>
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
