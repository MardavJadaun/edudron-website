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

// import AboutUs from './components/AboutUs';
import { Routes, Route, Link } from "react-router-dom";
import  BrowserRouter from "react-router-dom"; 
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
     {/* <BrowserRouter> */}
    {/* <Routes> */}
      {/* <Route path="/" element={<Home/>}> */}
        {/* <Route path="/aboutus" element={<AboutUs/>}> */}
        {/* </Route> */}
      {/* </Route> */}
    {/* </Routes> */}
  {/* </BrowserRouter> */}
    </>
  );
}

export default App;