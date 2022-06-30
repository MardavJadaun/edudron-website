import './PageCss/App.css';
import './PageCss/navbar.css';
import './PageCss/Home.css';
import './PageCss/Login.css';
import './PageCss/footer.css';
import Navbar from './components/Navbar';
import Home from './Home';
import Footer from './components/Footer';

// import Title from './Title'
// import TextForm from './components/TextForm';


function App() {
  return(
    <> 
 
    <Navbar/>
    {/* <Title/> */}
    <Home/>
    <RegistrationForm/>
    <Footer/>
    
    </>
  );
}

export default App;