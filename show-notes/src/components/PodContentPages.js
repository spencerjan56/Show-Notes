import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NoteBox from './PodPageNoteBox';


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

const PodContentPages = () => {
    const {routeId} = useParams();
    const notes = podNotes.find(item => item.id === routeId);

    return (

        <div className="pod-content-page">
            <div className='top-bar'></div>
            <h2>{notes ? notes.title : 'Content Not Found'}</h2>
            <p>{notes.subtitle}</p>
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

            <NoteBox />
            <div className='side-bar'>
                <i className='fas fa-bars burger-icon'></i>
            </div>
            <div className='bottom-bar'></div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        </div>
        
    )
}




export default PodContentPages