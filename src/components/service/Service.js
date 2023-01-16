import React from 'react'
import murder from '../../images/murder.png'
import driving from '../../images/driving-crimes.png'
import drug from '../../images/Drug-related.png'
import fraud from '../../images/fraud.png'
import violent from '../../images/violent-crimes.png'
import dot from '../../images/dots-shape.png'
import './service.css'
import { useState } from 'react'
import Practice from '../practice-area/Practice'
import { Link } from 'react-router-dom'

function Service() {
    const[DisputeCategory, setDisputeCategory] = useState("")

    const handleclick = e =>{
        e.preventDefault() 
        setDisputeCategory(e.target.value)
        console.log(DisputeCategory)
        console.log(e.target.value)

        // fetch(`/api/dispute_categories/${DisputeCategory}`)
        //   .then(res => res.json())
        //   .then(category =>{
        //     console.log(category)
            // return(
            //     <div>
            //     <Practice category={category}/>
            //     </div>
            // )
        //   })

    }
  return (
    <section className='service-section'>

      <div className='service-container'>

            <div className='service-line1'>
              <span className='pointing_icon' ></span>
              <span>Service</span>
              <span className='pointing_icon' id='icon2'></span>
            </div>

            <div className='service-line2'>
                <h1>Our Practice Areas</h1>
            </div>

            <div className='service-cards-container'>
                {/* <div className='service-dots'>
                </div> */}
                <Link to="Children Law" className='master-service' >
                    <img className='dots' id='service-dot1' src={dot} alt=''/>
                    <div className='service-card'>
                        <div className='service-card-top'>
                            <img value = 'Children Law' src={murder} alt='' className='service-image' onClick={handleclick} />
                        </div>
                        <div className='service-card-bottom'>
                            <span>Children Law</span>
                        </div>
                    </div>
                </Link>

                <Link to="Family Law" className='master-service'>
                    <div className='service-card'>
                        <div className='service-card-top'>
                        <img src={driving} alt='' className='service-image' />
                        </div>
                        <div className='service-card-bottom'>
                            <span>Family Law</span>
                        </div>
                    </div>
                </Link>

                <Link to="Criminal Law" className='master-service'>
                    <div className='service-card'>
                        <div className='service-card-top'>
                            <img src={drug} alt='' className='service-image' />
                        </div>
                        <div className='service-card-bottom'>
                            <span>Criminal Law</span>
                        </div>
                    </div>
                    <img className='dots' id='service-dot2' src={dot} alt=''/>
                </Link>

                <Link to="Succession Law" className='master-service'>
                    <img className='dots' id='service-dot3' src={dot} alt=''/>
                    <div className='service-card'>
                        <div className='service-card-top'>
                            <img src={fraud} alt='' className='service-image' />
                        </div>
                        <div className='service-card-bottom'>
                            <span>Succession Law</span>
                        </div>
                    </div>
                </Link>

                <Link to="/home/Commercial Law" className='master-service'>
                    <img className='dots' id='service-dot4' src={dot} alt=''/>
                    <div className='service-card'>
                        <div className='service-card-top'>
                            <img src={violent} alt='' className='service-image' />
                        </div>
                        <div className='service-card-bottom'>
                            <span>Commercial Law</span>
                        </div>
                    </div>
                </Link>
            </div>

      </div>

    </section>
  )
}

export default Service
