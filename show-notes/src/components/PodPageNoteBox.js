import React, { useState } from 'react';

import LoginButton from './LoginButton';


function NoteBox() {
  const [editableText, setEditableText] = useState('Default Text');
  const [loggedIn, setLoggedIn] = useState(false);

    const handleInputChange = (event) => {
        setEditableText(event.target.value);
      };
    
      return (
        <div>
          <LoginButton loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <div className="note-box-container">
            <div className='note-box'>
              {loggedIn ? (
                <input
                  type="text"
                  value={editableText}
                  onChange={handleInputChange}
                  className="editable-input"
                />
              ) : (
                <p className="non-editable-text" readOnly>{editableText}</p>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    export default NoteBox;


 /// login currently not functional

 /// for the text box logged in/out: I could *theoretically* use the same
 // {editableText} and just change the <input> to a <p>