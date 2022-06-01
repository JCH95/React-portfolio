import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import coverImage from './assets/images/oceanography-building.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={coverImage} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
