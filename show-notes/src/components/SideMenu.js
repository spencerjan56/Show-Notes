import React from 'react';

function SideMenu({ isOpen, onClose }) {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default SideMenu;