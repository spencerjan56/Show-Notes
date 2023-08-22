import React from 'react';
import { Link } from 'react-router-dom';

const HomeTile = ({imageUrl, routeTo}) =>{
    return (
        <Link to= {routeTo}>
            <img src={imageUrl} alt="Clickable Image" />
        </Link>

    );
};



export default HomeTile;