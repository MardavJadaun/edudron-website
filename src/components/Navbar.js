import React from 'react'
import PropTypes from 'prop-types'

// import Login from './loginpage/Login';
// import Signup from './loginpage/Signup';
// import { propTypes } from 'react-bootstrap/esm/Image'

export default function Navbar(props) {
  return (
    <header>
    <input id="nav-toggle" type="checkbox"/>
    <div class="logo">Edu<strong>Dron</strong></div>
      <li> Home</li>
      <li> About</li>

      <li><a href="#about">Colleges</a>
        <div class='sub-nav'>
        <ul>
        <li className='Hover-sub-nav'> <a href="s">Stream</a>
        <div className='sub-nav-2'>
          <ul>
            <li><a href="r">Management</a></li>
            <li><a href="a">Engineering</a></li>
            <li><a href="m">Pharmacy</a></li>
            <li><a href="d">Law</a></li>
            <li><a href="v">More</a></li>
          </ul>
        </div>
        </li>
        <li className='Hover-sub-nav'><a href="h">State</a>
        <div className='sub-nav-2'>
          <ul>
            <li> North State</li>
            <li> South State</li>
            <li> North East State</li>
            <li> North West State</li>
          </ul>
        </div></li>

        <li className='Hover-sub-nav'><a href="a">Courses</a>
        <div className='sub-nav-2'>
          <ul>
            <li><a href="m">Programming</a></li>
            <li><a href="a">Machine learning</a></li>
            <li><a href="r">Data Science</a></li>
            <li><a href="d">Cyber Security</a></li>
            <li><a href="f">Data Analyses</a></li>
          </ul>
        </div></li>
      </ul>
      </div></li>

      <li><a href="#Services">Services</a>
      <div class='sub-nav'>
        <ul>
        <li><a href="m">Our Courses</a></li>
        <li><a href="a">counselling</a></li>
        <li><a href="r">Mentorship</a></li>
        <li><a href="r">Training</a></li>
        <li><a href="d">Internship</a></li>
        <li><a href="a">Study Abroad</a></li>
        <li><a href="v">Career</a></li>
        <li><a href="j">More...</a></li>
        </ul>
      </div></li>
      <li><a href="#Contact Us">Contact Us</a></li>
      <button id="login" href="./loginpage/Login.js">Login</button>
      <button id='sign-up' href="#Login">Sign Up</button>
    
    
    <label for="nav-toggle" className="icon-burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
 </header>
  );
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
} 

Navbar.defaultProps = {
  title: 'EduDron'
  
};