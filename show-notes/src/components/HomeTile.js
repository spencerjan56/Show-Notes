import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';




const HomeTile = ({imageUrl, routeTo}) =>{
    return (
        
        <Link to= {routeTo} className="home-tile">
            <img src={imageUrl} alt=""/>
        </Link>

    );
};


export default HomeTile;