import React from 'react'
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
                    <li onClick={link}>Home</li>
                    <li onClick={link}>About</li>
                    <li onClick={link}>Service</li>
                    <li onClick={link}>Top-Cases</li>
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
