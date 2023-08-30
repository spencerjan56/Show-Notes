import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';




import HomeTile from './components/HomeTile'
import tileDataArray from './TileData'
import PodContentPages from './components/PodContentPages'






export default function App(){
  return(
    <BrowserRouter>
      <div className='app-container'>
        <div className='home-top-bar'>
          <p className='website-title'>Show Notes</p>
        </div>
        <div className='home-side-bar'>
          <i className='fas fa-bars burger-icon'></i>
        </div>
          <Routes>
            <Route path="/" element={<div className="home-tiles-container">
                {tileDataArray.map((tileData, index) => (
                  <HomeTile
                    key={index}
                    imageUrl={tileData.imageUrl}
                    routeTo={tileData.routeTo}
                  />
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
