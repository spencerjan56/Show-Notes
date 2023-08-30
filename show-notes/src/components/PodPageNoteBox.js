import React, { useState } from 'react';


function NoteBox() {
    const [loggedIn, setLoggedIn] = useState(true);
    const [editableText, setEditableText] = useState('Default Text');

    const handleInputChange = (event) => {
        setEditableText(event.target.value);
      };
    
      return (
        <div className="note-box-container">
          <div className='note-box'>
            {loggedIn ? (
              <input
                type="text"
                value={editableText}
                onChange={handleInputChange}
              />
            ) : (
              <p>{editableText}</p>
            )}
          </div>
        </div>
      );
    }
    
    export default NoteBox;


    /// This is a work in progress. For some reason, when I import 
    /// either 'noteBox' or 'editableText' into PodContentPages
    /// It says that the import is not recognized.

    /// Either way.. the above code is the beginning stage of 
    /// a CRUD text field (when logged in) that will alternatively
    /// appear as a simple text field when not logged  in :)