
import Navbar from './components/navbar/Navbar'
import Main from './components/Main';
import Footer from './components/footer/Footer';
import ContactUs from './components/contact-us/ContactUs'
import Appointment from './components/appointment/Appointment';
import Newsletter from './components/newsletter/Newsletter';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app-container'>
     <BrowserRouter>
     <Routes>
         
         <Route path="/appointment" element={<Appointment />} /> 
         <Route path="/contactus" element={<ContactUs/>} /> 
         
    </Routes>
      <Navbar />
      
      <Main />
      {/* <ContactUs /> */}
      {/* <Appointment/> */}
      </BrowserRouter>
      <Newsletter/>
      <Footer />
      
    </div>
    
  );
}

export default App;