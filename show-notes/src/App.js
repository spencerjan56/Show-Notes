import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';



import LoginButton from './components/LoginButton';
import HomeTile from './components/HomeTile'
import { TileDataArray } from './components/TileData';
import PodContentPages from './components/PodContentPages'
import TileImageReplace from './components/TileImageReplace'






export default function App(){

  const [loggedIn, setLoggedIn] = useState(false);
  const [tileDataArray, setTileDataArray] = useState(TileDataArray);

  const handleReplaceUrl = (tileId, newUrl) => {
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
  
    console.log('Updated tileDataArray:', updatedTileDataArray);
  };

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
                {TileDataArray.map((tileData, index) => (
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

