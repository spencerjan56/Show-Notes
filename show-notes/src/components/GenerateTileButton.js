import React from 'react';
import { useHistory } from 'react-router-dom'; // Correct import

const GenerateTileButton = ({ onGenerateTile }) => {
  const history = useHistory();

  const handleGenerateTile = () => {
    const newTile = onGenerateTile(); // Generate a new tile object
    history.push(`/pod/${newTile.id}`); // Navigate to the new tile's pod content page
  };

  return (
    <button className="generate-tile-button" onClick={handleGenerateTile}>
      Generate New Tile
    </button>
  );
};

export default GenerateTileButton;