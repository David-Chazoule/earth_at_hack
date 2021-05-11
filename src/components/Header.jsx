import React from 'react';
import './Header.css';

function Header({ name }) {

  return (
    <div className="Header-container">
      <h1 className="Header-Title">{name}</h1>
      <h2>Les meilleurs produits de la galaxie</h2>
    </div>
  );
}

export default Header;