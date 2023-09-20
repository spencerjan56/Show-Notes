import React, { useState, useEffect } from 'react';
import LoginButton from './LoginButton';

function NoteBox({ loggedIn, setLoggedIn }) {
  const [editableText, setEditableText] = useState('Default Text');
  

  useEffect(() => {
    try {
      fetch('/api/saveNote', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.note) {
            setEditableText(data.note.text);
          }
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  const handleInputChange = (event) => {
    setEditableText(event.target.value);
  };

  const saveNote = () => {
    fetch('/api/saveNote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: editableText }),
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
            <>
              <input
                type="text"
                value={editableText}
                onChange={handleInputChange}
                className="editable-input"
              />
            </>
          ) : (
            <>
              <p className="non-editable-text">{editableText}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteBox;
