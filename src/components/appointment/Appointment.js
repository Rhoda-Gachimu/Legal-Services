import React from 'react'
import './appointment.css'
import { Link } from "react-router-dom";

function Appointment() {
  return (
    <>
        {/* example 3 */}
        <div className='container'>
            <h1 className='form-title'>Book Appointment</h1>
            <form action='container-form'>
                <div className='main-user-info'>
                    <div className='user-input-info'>
                        <label for="firstname">First Name</label>
                        <input type="input-text" id="firstname" name="firstname" placeholder="Enter first name"></input>
                    </div>
                </div>
                <div className='main-user-info'>
                    <div className='user-input-info'>
                        <label for="secondname">Second Name</label>
                        <input type="input-text" id="secondname" name="secondname" placeholder="Enter second name"></input>
                    </div>
                </div>
                <div className='main-user-info'>
                    <div className='user-input-info'>
                        <label for="useremail">Email</label>
                        <input type="input-text" id="useremail" name="useremail" placeholder="Enter email"></input>
                    </div>
                </div>
                <div className='main-user-info'>
                    <div className='user-input-info'>
                        <label for="user-contact">Phone no.</label>
                        <input type="input-text" id="user-contact" name="user-contact" placeholder="Enter contact"></input>
                    </div>
                </div>
                <div className='main-user-info'>
                    <div className='user-input-info'>
                        <label for="casetype">Case Type</label>
                        <input type="texinput-text" id="placeholder-text" name="casetype" placeholder="Select casetype"></input>
                    </div>
                </div>
                <div className='main-user-info'>
                    <div className='user-input-info'>
                        <label for="Appointment-date">Appointment Date</label>
                        <input type="input-text" id="Appointment-date" name="Appointment-date" placeholder="Select Date"></input>
                    </div>
                </div>
                <div className='gender-detail-box'>
                    <span className='gender-detail-'></span>
                    <div className='gender-type'>
                        <input type="radio" name="Gender" id='male' />
                        <label for="male">Male</label> 
                        <input type="radio" name="Gender" id='female' />
                        <label for="female">Female</label> 
                    </div>
                </div>

                <div class="form-submit-btn">
                    <inport type="submit" value="Book"></inport>
                </div>
                <input type="submit" value="Submit" />

                <button type='submit'>Submit</button>

            </form>
        </div>
    </>
  )
}

export default Appointment;