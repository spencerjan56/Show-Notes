import React, { useState, useEffect } from 'react';

import LoginButton from './LoginButton';


function NoteBox() {
  const [editableText, setEditableText] = useState('Default Text');
  const [loggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
      fetch('/api/saveNote')
        .then((response) => response.json())
        .then((data) => {
          if (data.note) {
            setEditableText(data.note.text);
          }
        });
    }, []);

    const handleInputChange = (event) => {
      setEditableText(event.target.value);
  
      fetch('/api/saveNote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: event.target.value }),
      });
    };
    
    
      return (
        <div>
          <div className='ppLoginButtonBox'>
            <LoginButton className='ppLoginButton' loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </div>
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