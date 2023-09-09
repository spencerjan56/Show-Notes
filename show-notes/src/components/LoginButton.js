import React from 'react';

function LoginButton({ loggedIn, setLoggedIn }) {
  return (
    <button onClick={() => setLoggedIn(!loggedIn)}>
      {loggedIn ? 'Logout' : 'Login'}
    </button>
  );
}

export default LoginButton;