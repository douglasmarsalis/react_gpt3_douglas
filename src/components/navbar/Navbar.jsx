// Using VS Code extension - es7 snippets, type rafce, this will bring up a box with choice, ENTER - this will give you the React functional component to start

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; //imports the icons from file/folder
import logo from '../../assets/logo.svg';
import './navbar.css';

/*This variable/function(component) will be used below for <Menu />, it allows the use of the html inside the variable Menu to be used multiple times, the <></> is a React fragment which allows the use of the html inside the function*/
const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT3?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p> 
  </>
)
// BEM Block Element Modifier - the class names being used below are BEMs
// useState ~ minute 54-55 of video  
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3__navbar-links_container">
            <Menu />                                   
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar