import React from 'react';

import Header from './Header';
import SellersCard from './SellersCard';


import Ingenuity from './Assets/images/ingen.png';
import Perseverance from './Assets/images/perseverance.gif';
import Insight from './Assets/images/InSight.jpg';
import Schiaparelli from './Assets/images/Schiaparelli.jpg';
import Curiosity from './Assets/images/Curiosity.jpg';
import Phoenix from './Assets/images/Pheonix.jpg';
import Opportunity from './Assets/images/Oportunity.jpg';
import Spirit from './Assets/images/Spirit.jpg';
import Beagle from './Assets/images/Beegle.jpg';
import MPL from './Assets/images/MarsPolarLander.png';
import DeepSpace2 from './Assets/images/DeepSpace2.jpg';
import Sojourner from './Assets/images/Sojourner.jpg';
import Pathfinder from './Assets/images/Pathfinder.gif';
import Viking1 from './Assets/images/Viking1.jpg';
import Viking2 from './Assets/images/Viking2.jpg';
import Mars2 from './Assets/images/Mars2.jpg';
import Mars3 from './Assets/images/Mars3.jpg';
import Mars6 from './Assets/images/Mars6.gif';



import './Sellers.css'
import Footer from './Footer';

export default function Sellers() {
  const sellers = [
    {name: "Ingenuity", nationality: "American", type: "helicopter", avatar: Ingenuity, status: "Actif" },
    {name: "Perseverance ", nationality: "American", type:"", avatar: Perseverance, status:""},
    {name: "InSight", nationality: "American", type:"", avatar: Insight , status:""},
    {name: "Schiaparelli EDM", nationality: "European", type:"", avatar: Schiaparelli, status:""},
    {name: "Curiosity", nationality: "American", type:"", avatar: Curiosity, status:""},
    {name: "Phoenix", nationality: "American", type:"", avatar: Phoenix, status:""},
    {name: "Opportunity", nationality: "American", type:"", avatar: Opportunity, status:""},
    {name: "Spirit", nationality: "American", type:"", avatar: Spirit, status:""},
    {name: "Beagle 2", nationality: "UK", type:"", avatar: Beagle, status:""},
    {name: "Mars Polar Lander", nationality: "American", type:"", avatar:MPL, status:""},
    {name: "Deep Space 2", nationality: "American", type:"", avatar: DeepSpace2, status:""},
    {name: "Sojourner", nationality: "American", type:"", avatar: Sojourner, status:""},
    {name: "Mars Pathfinder", nationality: "American", type:"", avatar: Pathfinder, status:""},
    {name: "Viking 2", nationality: "American", type:"", avatar: Viking2, status:""},
    {name: "Viking 1", nationality: "American", type:"", avatar: Viking1, status:""},
    {name: "Mars 6", nationality: "USSR", type:"", avatar: Mars6, status:""},
    {name: "Mars 3", nationality: "USSR", type:"", avatar: Mars3, status:""},
    {name: "Mars 2", nationality: "USSR", type:"", avatar: Mars2, status:""}
  ]
  
  return (
    <div className="Sellers-Main">
      <Header />
      <div className="Sellers-Container">
      {sellers.map((seller) => {
        return(
        <SellersCard name={seller.name} nationality={seller.nationality} type={seller.type} avatar={seller.avatar}/>
        )
      })
      }
      </div>
      <Footer />
    </div>
  )
}
