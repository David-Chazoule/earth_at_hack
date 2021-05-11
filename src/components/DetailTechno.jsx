import React from 'react';

import { Link } from 'react-router-dom'

import './DetailTechno.css';

export default function DetailTechno(props) {
  return (
    <div className="DetailTechnoContainer">
      <h2>{props.name}</h2>
      <img src={props.image} alt="DetailTechnoImage" className="DetailTechnoImage"/>
      <p>{props.presentation}</p>
      <button className="DetailTechnoButton">I WANT IT FOR MY PLANET</button>
      <Link to="/technos">
      <button className="DetailTechnoButton">GO BACK</button>
      </Link>
    </div>
  )
}
