import React from 'react';
import { Link } from 'react-router-dom';


import './TechnoCard.css';

export default function TechnoCard(props) {
  return (
    <div className="TechnoCardContainer">
     <p className="card-name">{props.name}</p>
      <img className="TechnoImage"  alt="TechnoCardImage" src={props.image} />
      <Link to={`/technos/${props.id}`}>
      <button className="ShowDetails" >Show Details</button>
      </Link>
    </div>
  )
}
