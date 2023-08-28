import React from 'react';
import { useParams } from 'react-router-dom';

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

            <iframe
                width="560"
                height="315"
                src={notes.link}
                title={notes.title}
                allowFullScreen
            ></iframe>
            

            <p>
                This will be a text field that will display my notes.
                It will be editable when logged in.
                But when not logged in, it will simply appear as text on the screen.
            </p>

            <div className='bottom-bar'></div>

        </div>
        
    )
}




export default PodContentPages