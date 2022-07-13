import './PageCss/App.css';
import './PageCss/navbar.css';
import './PageCss/Home.css';
import './PageCss/footer.css';
import './PageCss/Login.css'
import './PageCss/Signup.css'
import Navbar from './components/Navbar';
import Home from './Home';
import Signup from './loginpage/signup'
import Login from './loginpage/login';
import Footer from './components/Footer';
// import AboutUs from './components/AboutUs';


function App() {
  return(
    
    
     <>
     {/* <BrowserRouter> */}
    {/* <Routes> */}
      <Navbar/>
      <Home/>
      <Signup/>
      <Login/>
      {/* <Route path="/" element={<Home/>}> */}
        {/* </Route> */}
      {/* </Route> */}
      <Footer/>
    {/* </Routes> */}
  {/* </BrowserRouter> */}
    </>
  );
}

export default App;