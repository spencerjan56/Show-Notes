import React from 'react';
// import { useHistory } from 'react-router-dom'; // Correct import for nvm 14?
import { useNavigate } from 'react-router-dom';

const GenerateTileButton = ({ onGenerateTile }) => {
  const navigate = useNavigate();

  const handleGenerateTile = () => {
    const newTile = onGenerateTile();
    navigate(`/pod/${newTile.id}`); // Navigate to the new tile's pod content page
  };

  return (
    <button className="generate-tile-button" onClick={handleGenerateTile}>
      Generate New Tile
    </button>
  );
};

export default GenerateTileButton;
