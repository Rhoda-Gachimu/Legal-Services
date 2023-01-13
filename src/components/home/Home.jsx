import React from 'react'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import './home.css'

function Home() {

  return (
    <section className='home_page'>
      <div id='home-line1'>
        <span className='pointing_icon'></span>
        <span>STRONG TEAM OF LAWYERS</span>
      </div>

      <div id='home-line2'>
        <h1>Effective Case <br/> With Great <br/> Solutions.</h1>
      </div>

      {/* <div id='home_card_container'>
        <div className='home-card-wrapper'>
                <img className='dots' id='home-dot1' src={dot} alt=''/>
                <img className='dots' id='home-dot2' src={dot} alt=''/>
            <div className='card home_card'>
                <span>Under the law everyone has Rights</span>
            </div>
        </div>
      </div> */}

      <div className='home-slide-down-container'>
            <span>Slide Down</span>
            <HiOutlineChevronDoubleDown className='down-icon'/>
        </div>
    </section>
  )
}

export default Home