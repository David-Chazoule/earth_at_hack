import React, { useState } from 'react';
import ShopperForm from '../components/ShopperForm';

import { Link } from 'react-router-dom'

import './DetailTechno.css';


export default function DetailTechno(props) {

const [showShopperForm, setShowShopperForm] = useState (false);

const handleClick = () => {
  setShowShopperForm(!showShopperForm);

}
  return (
    <div>

    <div className="DetailTechnoContainer">
      <h2>{props.name}</h2>
      <img src={props.image} alt="DetailTechnoImage" className="DetailTechnoImage"/>
      <p>{props.presentation}</p>
      <button onClick={handleClick}>I WANT IT FOR MY PLANET</button> 
      <Link to="/technos">
      <button className="DetailTechnoButton">GO BACK</button>
    </Link>
    </div>
    <div>
      {showShopperForm &&
      <ShopperForm /> }

    </div>
    </div>
  )
}
