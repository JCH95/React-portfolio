import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import coverImage from './assets/images/oceanography-building.jpg';
import './App.css';

function App() {
  const [pages] = useState([
    { name: 'Home', description: 'About' },
    { name: 'Portfolio', description: 'Portfolio' },
    { name: 'ContactForm', description: 'ContactForm' },
    { name: 'Resume', description: 'Resume' },
  ]);

  const [currentPage, setcurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Header />
      <Navbar
        pages = {pages}
        setcurrentPage = {setcurrentPage}
        currentPage = {currentPage}
      />
      <main>
        {currentPage.name === 'Home' ?
            (<About></About>)
            : currentPage.name === 'Portfolio' ?
              (<Portfolio></Portfolio>)
              : currentPage.name === 'Resume' ?
                (<Resume></Resume>)
                : currentPage.name === 'ContactForm' ?
                  (<Contact />)
                  : (<></>)
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
