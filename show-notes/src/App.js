import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
//import { Link } from 'react-router-dom';


import HomeTile from './components/HomeTile'
import tileDataArray from './TileData'


export default function App(){
  return(
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  )
}