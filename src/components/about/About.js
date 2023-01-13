import React from 'react'
import dot from '../../images/dots-shape.png'
import inner1 from '../../images/inner1.png'
import inner2 from '../../images/inne2.png'
import inner3 from '../../images/inner3.png'
import './about.css'

function About() {
  return (
    <section className='about_section'>

      <div id='about_container'>
        <div id='right_about'>
          <img className='dots' id='right-dot' src={dot} alt='' />
          <div className='about-image'>
          </div>
        </div>

        <div className='left_about'>
            <div className='left-about-line1'>
                <span className='pointing_icon'></span>
                <span>About Us</span>
            </div>
            <div className='left-about-line2'>
                <h1>Why You Need <br/> The Top Lawyers!</h1>
            </div>
            <div className='left-about-line3'>
                <p>A full service law firm in <span>Nairobi</span> that has been <br/> recognised internationally with specialisation in <span>Law</span>.</p>
            </div>
            <div className='left-about-line4'>
                <p>Top Lawyers is one of the leading multi-disciplinary law firms in Kenya, managed by lawyers in all around the Country. <br/> Top lawyers are one of the top law firm in Kenya and represents <br/> both local and foreign clients.</p>
            </div>
        </div>
      </div>

      <div className='about-card-wrapper'>
        <div className='about-card-container'>
          <img src={dot} className='dots' id='about-dot1' alt=''/>
          <img src={dot} className='dots' id='about-dot2' alt=''/>
        <div className='about-card'>
          <div className='about-inner-card'>
            <div className='inner-top'>
              <img src={inner1} alt='' />
            </div>
            <div className='inner-bottom'>
              <span>Best Legal Defense</span>
            </div>
          </div>
          <div className='about-inner-card'>
            <div className='inner-top'>
              <img src={inner3} alt='' />
            </div>
            <div className='inner-bottom'>
              <span>Skilled Attorneys</span>
            </div>
          </div>
          <div className='about-inner-card'>
            <div className='inner-top'>
              <img src={inner2} alt='' />
            </div>
            <div className='inner-bottom'>
              <span>Trust And Estates</span>
            </div>
          </div>
        </div>
        </div>
      </div>

    </section>
  )
}

export default About
