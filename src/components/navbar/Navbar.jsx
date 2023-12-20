// Using VS Code extension - es7 snippets, type rafce, this will bring up a box with choice, ENTER - this will give you the React functional component to start

import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'; //imports the icons from file/folder
import logo from '../../assets/logo.svg';
import './navbar.css';

// BEM Block Element Modifier - the class names being used below are BEMs 
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className='gpt3__navbar-links_logo'>
            <img src={logo} alt="logo" />
          </div>
        </div>
    </div>
  )
}

export default Navbar