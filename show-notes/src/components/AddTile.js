import React from 'react';

import tileDataArray from './TileData'

function AddTile() {
    const newTile = {
        id: tileDataArray.length + 1, 
        imageUrl: '',
        routeTo: '/route/' + (tileDataArray.length + 1),
    };

    tileDataArray.push(newTile);


    }
    


        

export default AddTile;