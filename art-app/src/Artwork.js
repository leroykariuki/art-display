import React from 'react';

const Artwork = ({ artwork, addToMyArt, removeFromMyArt }) => {
  const { id, title, imageUrl } = artwork;

  const handleAddClick = () => {
    addToMyArt(artwork);
  };

  const handleRemoveClick = () => {
    removeFromMyArt(id);
  };

  return (
    <div className="artwork">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      {addToMyArt && <button onClick={handleAddClick}>Add to My Art</button>}
      {removeFromMyArt && <button onClick={handleRemoveClick}>Remove from My Art</button>}
    </div>
  );
};

export default Artwork;
