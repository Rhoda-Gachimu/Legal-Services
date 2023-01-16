
// import Appointment from './components/appointment/Appointment';
// import Newsletter from './components/newsletter/Newsletter';
import './App.css';

import NavBar from './components/navbar/NavBar'
import Main from './components/mainpage/Main';
import Footer from './components/footer/Footer'
import Appointment from './components/appointment/Appointment';
import About from './components/about/About';
import ContactUs from './components/contact-us/ContactUs';
import { Routes, Route } from 'react-router-dom';
import Practice from './components/practice-area/Practice';


function App() {
  return (
    <div className='app-container'>
     
      <NavBar />
      {/* <Main /> */}
      <Routes>
      {/* <Main />  */}
      <Route path="*" element={<Main/>}/>
      <Route path='home'>
        <Route index element={<Main/>}/>
         <Route path=':category_name' element={<Practice/>}/>

      </Route>
      
        <Route path='about' element={<About />} />
      <Route path='contact_us' element={<ContactUs />} />
      <Route path='appointments' element={<Appointment />} />
      <Route path='practice' element={<Practice />} />
      
      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;

