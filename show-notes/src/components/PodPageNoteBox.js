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


   /// Currently contains a non-functional (no critical error) useState hook that
   /// will eventually check for log-in status, and display accordingly, as
   /// well as give (or not give) authority to edit.