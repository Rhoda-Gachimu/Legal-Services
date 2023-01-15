import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.css'

export default function Page() {
  return (

    
    <div className='advoc'>
      

    <div className='advocate'>
<img src="https://cdn.standardmedia.co.ke/images/sunday/ctudo87bqbcfq5bb07af6bfd1b.jpg"
          alt=""></img>
          <h3> Patrick Lumumba</h3>
          <p className='co'>co-founder.ceo</p>
          </div>

     

<Container className='row'>
      
      <Row>
        <div className='about'>
        <Col>
        <h4>About</h4>
        <p>Patrick Loch Otieno Lumumba is a Kenyan who served as the Director of the Kenya Anti-Corruption Commission from September 2010 to August 2011. Since 2014, Lumumba has been the Director of The Kenya School of Law. An eloquent lawyer, Lumumba earned his LL.B and LL.M degrees at the University of</p>
        </Col>
        </div>
        <div className='skills'>
        <Col>
        <h4>Skills</h4></Col>
        <p><ul>
          <li>Development</li>
          <li>Designs</li>
          <li>Marketing</li>
          <li>Communication</li>
          <li>Photography</li>
        </ul>
      </p>
        </div>
        <div className='contact'>
        <Col><h4>Contact info</h4></Col>
        <p><ul>
          <li>+82-011866783</li>
          <li>roneywesonga@gmail.com</li>
          <li>Dream-theme</li>
        </ul></p>
        </div>
      </Row>
    </Container>

     
       <h6>2022 @ advocates.com </h6>
    
    </div>

  )
}

