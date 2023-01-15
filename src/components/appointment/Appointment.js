import React from 'react'
import './appointment.css'

function Appointment() {
  return (
    <>
         {/* 2nd form  */}
        <div class="appointment-container">
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
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

                            <label>Phone:</label><br></br>
                            <input type="phone" phone="phone" id='name' placeholder="Enter phone"></input><br></br>

                            <label  >Dispute Type:</label><br></br>
                            <select id="dispute">
                                <option value="0">Select Dispute Type</option>
                                <option value="0">Adoption</option>
                                <option value="0">Custody $ Maintenance</option>
                                <option value="0">Guardianship</option>
                                <option value="0">Surrogacy</option>
                                <option value="0">Divorce & Separation</option>
                                <option value="0">Prenuptial Agreements</option>
                                <option value="0">Murder</option>
                                <option value="0">Theft byy Servant</option>
                                <option value="0">SRobery with Violence</option>
                                <option value="0">Testate Succession</option>
                                <option value="0">Intestate Succession</option>
                                <option value="0">Insolvency & Bankruptcy</option>
                                <option value="0">Pertnership</option>
                                <option value="0">Joint Vencture</option>
                                <option value="0">Trademark</option>
                                <option value="0">Copyright</option>
                                <option value="0">Patent</option>
                            </select><br></br><br></br>
                            {/* <input type="disputes" disputes="dispute" id='name' placeholder="Enter despute type"></input><br></br> */}

                            <label className='genderlable'>Gender:</label><br></br>
                            &nbsp;&nbsp;&nbsp;
                            <input type="radio" name="Gender" id='male' />
                            &nbsp;
                            <span id='male'>Male</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;

                            <input type="radio" name="Gender" id='female' />
                            &nbsp;
                            <span id='female'>Female</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>

                            {/* <label>Dispute Type</label><br></br>
                            <input type="checkbox" name="disputetype" id='Criminal' />
                            &nbsp;
                            <span id='Criminal'>Criminal</span>
                            &nbsp;&nbsp;&nbsp;&nbsp; */}
                            
                            {/* <input type="checkbox" name="disputetype" id='Criminal' />
                            &nbsp;
                            <span id='Land'>Land</span>
                            &nbsp;&nbsp;&nbsp;&nbsp; */}

                            {/* <input type="checkbox" name="disputetype" id='Land' />
                            &nbsp;
                            <span id='Family'>Family</span><br></br><br></br> */}

                            <input type="submit" value="submit" name='submit' id="submit" /> 
                        </form>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Appointment;