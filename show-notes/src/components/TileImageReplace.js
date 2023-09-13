import React, { useState } from 'react';

function TileImageReplace({ onReplaceUrl, tileId }) {
  const [newImageUrl, setNewImageUrl] = useState('');

  const handleInputChange = (event) => {
    setNewImageUrl(event.target.value);
  };

  const handleReplaceClick = () => {
    // Call the callback function to replace the URL in the parent component
    onReplaceUrl(tileId, newImageUrl);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New URL"
        value={newImageUrl}
        onChange={handleInputChange}
      />
      <button className='replace-button' onClick={handleReplaceClick}>
        Replace
      </button>
    </div>
  );
}

export default TileImageReplace;