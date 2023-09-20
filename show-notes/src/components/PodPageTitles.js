import React, { useState, useEffect } from 'react';
import LoginButton from './LoginButton';

function Titles() {
  const [title, setTitle] = useState('Podcast Title Goes Here');
  const [subtitle, setSubtitle] = useState('Podcast Subtitle Will Go In This Position');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  return (
    <div>
      <div className='ppLoginButtonBox'>
        <LoginButton className='ppLoginButton' loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>

      <div className='titles-container'>
        {loggedIn ? (
          <>
            <input
              className='podcast-title'
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
            <input
              className='podcast-subtitle'
              type="text"
              value={subtitle}
              onChange={handleSubtitleChange}
            />
          </>
        ) : (
          <>
            <h1 className='podcast-title'>{title}</h1>
            <h2 className='podcast-subtitle'>{subtitle}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default Titles;