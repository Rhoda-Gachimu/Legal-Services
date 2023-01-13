import React from 'react'
import './footer.css'

function Footer() {
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

        <div className='footer-btn'>
            <span>GET AN APPOINTEMENT</span>
            <span></span>
        </div>
      </div>
      
    </section>
  )
}

export default Footer