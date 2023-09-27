import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';



import LoginButton from './components/LoginButton';
import HomeTile from './components/HomeTile'
import { TileDataArray } from './components/TileData';
import PodContentPages from './components/PodContentPages'
import TileImageReplace from './components/TileImageReplace'
import SideMenu from './components/SideMenu';
import AboutPage from './components/AboutPage';
import GenerateTileButton from './components/GenerateTileButton';


///


export default function App(){

  const [loggedIn, setLoggedIn] = useState(false);
  const [tileDataArray, setTileDataArray] = useState(TileDataArray);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const generateNewTile = () => {
    const newTileId = tileDataArray.length + 1;
    const newTile = {
      id: newTileId,
      imageUrl: 'URL_OF_YOUR_NEW_IMAGE',
      routeTo: `/route/${newTileId}`,
    };
    setTileDataArray([...tileDataArray, newTile]);
  };
  

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }

//// This side menu code above. Why do we need a separate const
//// for setting it to closed? Why isnt it as simple as 1 piece
//// of state, just like the login button?

  useEffect(() => {
    // Fetch tile data from backend API
    fetch(`http://localhost:3001/api/getTiles?timestamp=${Date.now()}`)
      
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
////// The section right above this (i believe) i not
///// working correctly
///

  return(
    <BrowserRouter>
      <div className='app-container'>
        <div className='home-top-bar'>
          <LoginButton loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <p className='website-title'>Show Notes</p>
        </div>
        <div className='home-side-bar'>
          <div className="burger-icon" onClick={toggleSideMenu}>
            <i className='fas fa-bars burger-icon'></i>
          </div>
          <SideMenu isOpen={isSideMenuOpen} onClose={toggleSideMenu} />  
        </div>
          {loggedIn && ( // Conditionally render the button when logged in
            <div>
              <GenerateTileButton onGenerateTile={generateNewTile} />
            </div>
          )}
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
            <Route path="/about" element={<AboutPage />} />
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

