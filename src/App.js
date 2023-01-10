import Navbar from './components/navbar/Navbar'
import Main from './components/Main';
// import TextShow from './components/textShow/TextShow';
import Footer from './components/footer/Footer';
import ContactUs from './components/contact-us/ContactUs'
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
    <section className='All_Content'>
      <Main />
      {/* <TextShow /> */}
      <Footer />
    </section>
    </div>
  );
}

export default App;