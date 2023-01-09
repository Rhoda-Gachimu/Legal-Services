import NavBar from './components/navbar/NavBar'
import Main from './components/Main';
// import TextShow from './components/textShow/TextShow';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
    <section className='All_Content'>
      <Main />
      {/* <TextShow /> */}
      <Footer />
    </section>
    </>
  );
}

export default App;
