import React from 'react';
import './Header.css';

function Header({ name }) {

  return (
    <div className="Header-container">
      <h1 className="Header-Title">{name}</h1>
      <h2>The best tech products in the galaxy</h2>
    </div>
  );
}

export default Header;