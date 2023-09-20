import React, { useState, useEffect } from 'react';
import LoginButton from './LoginButton';


const podNotes = [
    { id: '1', title: 'Huberman Lab - Achieve Your Goals', subtitle:'Goals Toolkit: How to Set & Achieve Your Goals', link:'https://www.youtube.com/embed/CrtR12PBKb0' },
    { id: '2', title: '???' },
    { id: '3', title: '' },
    { id: '4', title: '' },
    { id: '5', title: '' },
    { id: '6', title: '' },
    { id: '7', title: '' },
    { id: '8', title: '' },
    { id: '9', title: '' },
    { id: '10', title: '' },
    { id: '11', title: '' },
    { id: '12', title: '' },
    { id: '13', title: 'Ayo bruddah' },
    { id: '14', title: '' },
    { id: '15', title: '' },
    { id: '16', title: '' },
    { id: '17', title: '' },
    { id: '18', title: '' },
  ];



function Video({ loggedIn, setLoggedIn, routeId }) {
  const [videoUrl, setVideoUrl] = useState();
  const notes = podNotes.find(item => item.id === routeId);
  

  const handleUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  return (
    <div>
      <div className='ppLoginButtonBox'>
        <LoginButton className='ppLoginButton' loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>

       <div className='video-replace-container'> 
        {loggedIn ? (
            <>
                <input
                className='video-url-replace' 
                type="text"
                placeholder="Video URL Goes Here"
                value={videoUrl}
                onChange={handleUrlChange}  
                />
            </>
                ) : (
                <>
                <div className='video-display-container'>
                    <iframe
                        className='video-display'
                        width="560"
                        height="315"
                        src={notes.link}
                        title={notes.title}
                        allowFullScreen
                    ></iframe>
                </div>
                </>
                )}
        </div>
      </div>
  );
}

export default Video;