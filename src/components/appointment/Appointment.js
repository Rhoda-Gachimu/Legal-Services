import React from 'react'
import './appointment.css'
// import { Link } from "react-router-dom";

function Appointment() {
  return (
    <>
         {/* 2nd form  */}
            <div class="main">
                <div className="appointment-form">
                    <h2 className='header-h2'>Book Appointment</h2>
                    <form id='appointment' method='post'>
                        <label >First name:</label><br></br>
                        <input type="text" name="firstname" id='name' placeholder="Enter first name"></input><br></br>

                        <label >Second name:</label><br></br>
                        <input type="text" name="secondname" id='name' placeholder="Enter second name"></input><br></br>

                        <label  >Email:</label><br></br>
                        <input type="email" email="secondname" id='name' placeholder="Enter email adress"></input><br></br>

                        <label className='genderlable'>Gender:</label><br></br>
                        &nbsp;&nbsp;&nbsp;
                        <input type="radio" name="Gender" id='male' />
                        &nbsp;
                        <span id='male'>Male</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;


                <div class="form-submit-btn">
                    <inport type="submit" value="Book"></inport>
                </div>
               


                        <input type="checkbox" name="disputetype" id='Criminal' />
                        &nbsp;
                        <span id='Criminal'>Criminal</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        

                        <input type="checkbox" name="disputetype" id='Criminal' />
                        &nbsp;
                        <span id='Land'>Land</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;

                        <input type="checkbox" name="disputetype" id='Land' />
                        &nbsp;
                        <span id='Family'>Family</span><br></br><br></br>

                        <input type="submit" value="submit" name='submit' id="submit" /> 
                    </form>
                </div>
            </div>
    </>
  )
}

export default Appointment;