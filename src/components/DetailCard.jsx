import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DetailTechno from './DetailTechno';

import './DetailCard.css';
import Header from './Header';

export default function DetailCard() {
  const [technoDetails, setTechnoDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const params = useParams()


  useEffect(() => {
    fetch('https://api.nasa.gov/techtransfer/patent/?engine&api_key=zIGBlPJ9IjuQHnSeokX4LqZ9QPlri9jtdNaYJUZz')
    .then((resp) => resp.json())
    .then((data) => {
      setTechnoDetails(...data.results.filter((techno) => (techno[12] == params.id)));
      setShowDetails(!showDetails);
  })}, [])


  return (
    <div>
      <Header />
    <div className="DetailCardContainer">
     <DetailTechno name={technoDetails[1]} image={technoDetails[10]} presentation={technoDetails[3]} />
    </div>
  </div>
  )
}
