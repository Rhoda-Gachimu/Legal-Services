import React from 'react'
import hammer from '../../images/court-hammer.jpeg'
import './textshow.css'

function TextShow() {
  return (
    <section className='textshow-section'>
      <div className='textshow-wrapper'>
        <div className='showline1'>
            <img src={hammer} alt=''/>
        </div>
        <div className='showline2'>
        <p>Top Lawyers is one of the leading multi-disciplinary law firms in Kenya, managed by lawyers in all around the Country. <br/> Top lawyers are one of the top law firm in Kenya and represents <br/> both local and foreign clients.</p>
        </div>
        <div className='showline3'>
            <img src={hammer} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default TextShow
