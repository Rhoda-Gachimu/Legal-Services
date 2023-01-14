import Navbar from './components/navbar/Navbar'
import Main from './components/mainpage/Main';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import ContactUs from './components/contact-us/ContactUs'
import Appointment from './components/Appointments/Appointments'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app-container'>
     <BrowserRouter>
      <Navbar />
      {/* <Main /> */}
      <Routes>
      {/* <Main />  */}
      <Route path='home' element={<Main/>} />
        <Route path='about' element={<About />} />
      <Route path='contact_us' element={<ContactUs />} />
      <Route path='appointments' element={<Appointment />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;