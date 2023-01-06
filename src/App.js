import ContactUs from './components/contact-us/ContactUs'
import Login from './components/login/Login'
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  return (
    <div >
         <Home/>
         <Signup/>
         <Login/>
         <ContactUs />
    </div>
  );
}

export default App;
