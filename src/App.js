import Navbar from './components/navbar/Navbar'
import Main from './components/Main';
import Footer from './components/footer/Footer';
import ContactUs from './components/contact-us/ContactUs'
import './App.css';
import Appointment from './components/Appointments/Appointments';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app-container'>
     <BrowserRouter>
      <Navbar />
      <Main />
      <Appointment />
      <ContactUs />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;