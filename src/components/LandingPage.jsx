import React from 'react';

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
        <h1 class="txt-intro">Lorem ipsum dolor sit amet.Et molestiae odio eos quasi ullam ut autem porro in quam quia. Eum iusto repellat est rerum consequatur At fuga voluptate eos asperiores doloribus ex nihil quibusdam in saepe nesciunt.</h1>
      {/* </div> */}
      
        
      
      {/* <div className="landing-btn"> */}
        <button className="btn-enter" type="button">ENTER</button>
      {/* </div> */}
      </div>
      </div>
    </div>
  );
}


export default LandingPage;