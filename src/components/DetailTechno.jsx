import React, { useState } from 'react';
import ShopperForm from '../components/ShopperForm';

import './DetailTechno.css';


export default function DetailTechno(props) {

const [showShopperForm, setShowShopperForm] = useState (false);

const handleClick = () => {
  setShowShopperForm(!showShopperForm);

}
  return (
    <div className="DetailTechnoContainer">
      <h2>{props.name}</h2>
      <img src={props.image} alt="DetailTechnoImage" className="DetailTechnoImage"/>
      <p>{props.presentation}</p>
      <button onClick={handleClick}>I WANT IT FOR MY PLANET</button> 
      {showShopperForm &&
      <ShopperForm /> }
    </div>
  )
}
