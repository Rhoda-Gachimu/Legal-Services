import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {

    function appointmentLink() {
        window.scrollTo(0, 0)
    }

  return (
    <section className='footer-section'>
      <div className='footer-div'>
        <div className='footer-line1'>
            <span className='pointing_icon'></span>
            <span>About Us</span>
        </div>
        <p className='footer-text'>Main practice areas of the firm 
            include Admiralty, Maritime and Ship 
            Arrest, Arbitration, Mediation and 
            ADRs, Aviation Matters, Banking, 
            Finance & Investment, Capital Market, 
            Commercial Litigation, Commercial 
            Transactions, International Trade, 
            Construction & Engineering., Foreign 
            Investment and Business Set-Up.</p>
      </div>

      <div className='footer-div'>
        <div className='footer-line1'>
            <span className='pointing_icon'></span>
            <span>Practice Area</span>
        </div>
            <p className='footer-text'>Social Issues</p>
            <p className='footer-text'>Life Insurance</p>
            <p className='footer-text'>Business Manage</p>
            <p className='footer-text'>Fraud Matters</p>
            <p className='footer-text'>Land & Property</p>
            <p className='footer-text'>Criminal Prosecution</p>
      </div>
      <div className='footer-div'>
        <div className='footer-line1'>
            <span className='pointing_icon'></span>
            <span>Quick Links</span>
        </div>
        <div className='footer-last-div'>
            <div className='footer-hr-container'>
                <span className='point'></span>
                <hr/>
            </div>
            <p>Home</p>
        </div>
        <div className='footer-last-div'>
            <div className='footer-hr-container'>
                <span className='point'></span>
                <hr/>
            </div>
            <p>About</p>
        </div>
        <div className='footer-last-div'>
            <div className='footer-hr-container'>
                <span className='point'></span>
                <hr/>
            </div>
            <p>Service</p>
        </div>
        <div className='footer-last-div'>
            <div className='footer-hr-container'>
                <span className='point'></span>
                <hr/>
            </div>
            <p>Top Cases</p>
        </div>

        <Link to='/appointment'>
            <div className='footer-btn' onClick={appointmentLink}>GET AN APPOINTEMENT</div>
        </Link>
      </div>
      
    </section>
  )
}

export default Footer
