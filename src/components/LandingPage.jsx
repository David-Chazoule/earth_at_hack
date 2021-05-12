import React from 'react';
import {Link} from 'react-router-dom';
import Mars3 from './Assets/Mars.mp4';


import './LandingPage.css';



function LandingPage (){
  return(
    <div className="landingPage-container">
      <div className="video-box">
       <video className="Mars-video" autoPlay muted loop>
        <source src={Mars3} type="video/mp4" /></video> 
        </div>
      
       <div className="intro-btn-box"> 
      <div className="landing-intro">
      <h1 className="Header-Title">Mars°Ma°Zon</h1>
        <h2 className="txt-intro">The first intergalactic commercial counter.
Sale of NASA technology and more.</h2>
        <Link to="/technos">
        <button className="btn-enter" type="button">ENTER</button>
        </Link>
      </div>
      </div>
    </div>
  );
}


export default LandingPage;