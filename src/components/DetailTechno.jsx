import React from 'react';

import './DetailTechno.css';

export default function DetailTechno(props) {
  return (
    <div className="DetailTechnoContainer">
      <h2>{props.name}</h2>
      <img src={props.image} alt="DetailTechnoImage" className="DetailTechnoImage"/>
      <p>{props.presentation}</p>
      <button>I WANT IT FOR MY PLANET</button>  
    </div>
  )
}
