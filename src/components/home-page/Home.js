import React from 'react'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import './home.css'

function Home() {
  return (
    <section className="home_page">
      
      <div id="home-line1">
        <span className="pointing_icon"></span>
        <span>STRONG TEAM OF LAWYERS</span>
      </div>

      <div id="home-line2">
        <h1>
          Effective Case <br /> With Great <br /> Solutions.
        </h1>
      </div>
     

      <div className="home-slide-down-container">
        <span>Slide Down</span>
        <HiOutlineChevronDoubleDown className="down-icon" />
      </div>
    </section>
  )
}

export default Home
