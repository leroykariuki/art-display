import React from 'react';
import Artwork from './Artwork';
import './App.css';

const MyArt = ({ myArt, removeFromMyArt }) => {
  return (
    <div>
      <h2>My Art</h2>
      {myArt.map(artwork => (
        <Artwork key={artwork.id} artwork={artwork} removeFromMyArt={removeFromMyArt} />
      ))}
    </div>
  );
};

export default MyArt;
