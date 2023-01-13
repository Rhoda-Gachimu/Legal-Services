import React from "react";
import './newsletter.css';

function Newsletter(){
    return(
        <div>
            <div class='footer2'>
          <div class='newslettertext'>
            <h2>Stay up to date</h2>
            <p>
              Subscribe to our newsletter to receive update and learn more about
              TOP LAWYERS.
            </p>
          </div>
          <form class='newsletter'>
            <input id='email' placeholder='Enter your email address'></input>
            <button type='submit' id='sub'>Subscribe</button>
          </form>
        </div>
        </div>
    )
}
export default Newsletter;


