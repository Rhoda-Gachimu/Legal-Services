import React from 'react'
import './cases.css'

function Cases() {
  return (
    <section className='cases-section'>
      <div className='cases-lin1'>
        <span className='pointing_icon' ></span>
        <span>Top Cases</span>
        <span className='pointing_icon' id='point2' ></span>
      </div>

      <div className='cases-card-container'>
        <div className='cases-card' id='cases-card-1'>
            <p>Amely</p>
            <div></div>
        </div>
        <div className='cases-card' id='cases-card-2'>
            <p>Velodamir</p>
            <div></div>
        </div>
        <div className='cases-card' id='cases-card-3'>
            <p>Room 3f-05</p>
            <div></div>
        </div>
      </div>
    </section>
  )
}

export default Cases
