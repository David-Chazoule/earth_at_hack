import React from 'react';
import './Header.css';

function Header({ name }) {

  return (
    <div className="Header-container">
      <h1 className="Header-Title">Mars°Ma°Zon</h1>
      <h2 >{name}</h2>
    </div>
  );
}

export default Header;