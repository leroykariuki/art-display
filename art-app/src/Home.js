import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({ addToMyArt }) => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('https://api.artic.edu/api/v1/artworks')
      .then(response => {
        const artworksArray = response.data.data;
        setArtworks(artworksArray);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Artworks</h2>
      <div className="artwork-list">
        {artworks.map(artwork => (
          <div key={artwork.id} className="artwork">
            <img src={artwork.thumbnail.url} alt={artwork.title} width={artwork.thumbnail.width} height={artwork.thumbnail.height} />
            <h3>{artwork.title}</h3>
            <button onClick={() => addToMyArt(artwork)}>Add to My Art</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
