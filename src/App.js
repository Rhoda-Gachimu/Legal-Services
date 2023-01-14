
// import Appointment from './components/appointment/Appointment';
// import Newsletter from './components/newsletter/Newsletter';
import './App.css';
// import NavBar from './components/navbar/NavBar'
import Main from './components/Main'
import Footer from './components/footer/Footer'
import Appointment from './components/appointment/Appointment';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <NavBar /> */}

    <div className='All_Content'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/appointment' element={<Appointment className='scroll-to-top' />} />
      </Routes>
      <Footer />
    </div>
    </>
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