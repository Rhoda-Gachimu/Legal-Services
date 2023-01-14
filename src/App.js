
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

function App() {
  return (
    <div className='app-container'>
     
      <NavBar />
      {/* <Main /> */}
      <Routes>
      {/* <Main />  */}
      <Route path='home' element={<Main/>} />
        <Route path='about' element={<About />} />
      <Route path='contact_us' element={<ContactUs />} />
      <Route path='appointments' element={<Appointment />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;





















// {/* <div className='app-container'> */}
//      {/* <BrowserRouter> */}
//      {/* <Routes> */}
         
//          {/* <Route path="/appointment" element={<Appointment />} />  */}
//          {/* <Route path="/contactus" element={<ContactUs/>} />  */}
         
//     {/* </Routes> */}
//       {/* <Navbar /> */}
      
//       {/* <Main /> */}
//       {/* <ContactUs /> */}
//       {/* <Appointment/> */}
//       {/* </BrowserRouter>
//       <Newsletter/>
//       <Footer /> */}
      
//     {/* </div> */}