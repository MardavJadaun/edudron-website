import './PageCss/App.css';
import './PageCss/navbar.css';
import './PageCss/Home.css';
import './PageCss/Login.css';
import './PageCss/Signup.css';
import './PageCss/footer.css';
import Navbar from './components/Navbar';
import Home from './Home';
import Login from './loginpage/login'
import Signup from './loginpage/signup'
import Footer from './components/Footer';

// import Title from './Title'
// import TextForm from './components/TextForm';


function App() {
  return(
    <> 
 
    <Navbar/>
    {/* Title */}
    <Home/>
    <Login/>
    <Signup/>
    <Footer/>
    
    </>
  );
}

export default App;