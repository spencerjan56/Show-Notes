import React from 'react';


function SideMenu({ isOpen, onClose }) {

  const goToHomePage = () => {
    window.location.href = '/';
  };

  const goToAboutPage = () => {
    window.location.href = '/about';
  };


  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <button 
          className='home-button'
          onClick={goToHomePage}
          >Home</button>
        </li>

        <li>
          <button
          className='about-button'
          onClick={goToAboutPage}
          >About</button>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;