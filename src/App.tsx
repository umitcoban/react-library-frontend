import React from 'react';
import './App.css';
import { Navbar } from './components/layouts/navbar-footer/Navbar';
import { ExploreTopBooks } from './components/layouts/HomePage/ExploreTopBooks';
import { Carousel } from './components/layouts/HomePage/Carousel';
import { Heros } from './components/layouts/HomePage/Heros';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
    </div>
  );
}

export default App;
