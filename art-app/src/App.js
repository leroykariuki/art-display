import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import MyArt from './MyArt';
import About from './About'; 
import './App.css'

const App = () => {
  const [myArt, setMyArt] = useState([]);

  const addToMyArt = (artwork) => {
    setMyArt([...myArt, artwork]);
  };

  const removeFromMyArt = (artworkId) => {
    const updatedArt = myArt.filter(artwork => artwork.id !== artworkId);
    setMyArt(updatedArt);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/my-art">My Art</Link></li>
          <li><Link to="/about">About</Link></li> {/* Add a link to the About page */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home addToMyArt={addToMyArt} />} />
        <Route path="/my-art" element={<MyArt myArt={myArt} removeFromMyArt={removeFromMyArt} />} />
        <Route path="/about" element={<About />} /> {/* Add a route for the About page */}
      </Routes>
    </Router>
  );
};

export default App;
