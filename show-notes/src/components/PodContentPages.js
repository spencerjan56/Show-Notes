import React from 'react';
import { useParams } from 'react-router-dom';

const podNotes = [
    { id: '1', title: 'Podcast Title Here' },
    { id: '2', title: '' },
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
            <h2>{notes ? notes.title : 'Content Not Found'}</h2>
            <p>Other stuff here</p>
        </div>
    )
}




export default PodContentPages