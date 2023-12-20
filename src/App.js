// Using VS Code extension - es7 snippets, type rafce, this will bring up a box with choice, ENTER - this will give you the React functional component to start

import React from 'react';

// import { Article, Brand, CTA, } from './components'; Nomally we would do this, but this time we will create additional files and folders inside the src folder - containers
import { Footer, Blog, Possibility, Features, WGPT3, Header } from './containers'; //Pulls the chosen .jsx files from the containers folder
import { CTA, Brand, Navbar } from './components'; // Pulls the chosen .jsx files from the components folder
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App