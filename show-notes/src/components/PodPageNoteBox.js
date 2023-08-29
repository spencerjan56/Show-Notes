import React, { useState } from 'react';


function noteBox() {
    const [loggedIn, setLoggedIn] = useState(True);
    const [editableText, setEditableText] = useState('Default Text');

    const handleInputChange = (event) => {
        setEditableText(event.target.value);
      };
    
      return (
        <div>
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
      );
    }
    
    export default noteBox;


    /// This is a work in progress. For some reason, when I import 
    /// either 'noteBox' or 'editableText' into PodContentPages
    /// It says that the import is not recognized.

    /// Either way.. the above code is the beginning stage of 
    /// a CRUD text field (when logged in) that will alternatively
    /// appear as a simple text field when not logged  in :)