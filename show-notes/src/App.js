import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';



import LoginButton from './components/LoginButton';
import HomeTile from './components/HomeTile'
import { TileDataArray } from './components/TileData';
import PodContentPages from './components/PodContentPages'
import TileImageReplace from './components/TileImageReplace'



///


export default function App(){

  const [loggedIn, setLoggedIn] = useState(false);
  const [tileDataArray, setTileDataArray] = useState(TileDataArray);

  useEffect(() => {
    // Fetch tile data from backend API
    fetch(`/api/getTiles?timestamp=${Date.now()}`)
      
    .then((response) => {
      if (!response.ok) {
        console.error('Response status:', response.status);
        console.error('Response text:', response.statusText);
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .then((data) => {
        // Update component's state with the fetched tile data
        setTileDataArray(data.tiles);
      })
      .catch((error) => {
        console.error('Error fetching tile data:', error);
      });
  }, []);

///

const handleReplaceUrl = (tileId, newUrl) => {

  fetch(`/api/updateTile/${tileId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imageUrl: newUrl }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data if needed
      console.log('Updated tile data:', data.updatedTile);
    })
    .catch((error) => {
      console.error('Error updating tile data:', error);
    });

  const updatedTileDataArray = tileDataArray.map((tileData) => {
    if (tileData.id === tileId) {
      return {
        ...tileData,
        imageUrl: newUrl,
      };
    }
    return tileData;
  });
  setTileDataArray(updatedTileDataArray);

  // Now, make the API call to update the tile's URL
  fetch(`/api/updateTile/${tileId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imageUrl: newUrl }),
  })
    .catch((error) => {
      console.error('Error updating tile data:', error);
    });
};

///

  return(
    <BrowserRouter>
      <div className='app-container'>
        <div className='home-top-bar'>
          <LoginButton loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <p className='website-title'>Show Notes</p>
        </div>
        <div className='home-side-bar'>
          <i className='fas fa-bars burger-icon'></i>
        </div>
          <Routes>
            <Route path="/" element={<div className="home-tiles-container">
                {tileDataArray.map((tileData, index) => (
                <div key={index}>
                  <HomeTile
                    imageUrl={tileData.imageUrl}
                    routeTo={tileData.routeTo}
                  />
                  {loggedIn && (
                    <TileImageReplace
                    tileId={tileData.id}
                    onReplaceUrl={handleReplaceUrl}
                  />
                  )}
                </div>
                ))}
              </div>} />
            <Route path="/route/:routeId" element={<PodContentPages />} />
          </Routes>
      </div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    </BrowserRouter>
  )
}

