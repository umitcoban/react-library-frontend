import React from 'react';
import './App.css';
import HomePage from './components/layouts/HomePage/HomePage';
import { Navbar } from './components/layouts/navbar-footer/Navbar';
import Footer from './components/layouts/navbar-footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
