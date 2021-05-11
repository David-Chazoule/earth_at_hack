import React, {useState, useEffect} from 'react';

import TechnoCard from './TechnoCard';

import './Filter.css';

export default function Filter() {

  const [technos, setTechnos] = useState([]);
  const [showTechnos, setShowTechnos] = useState(false);
  const [selectedTechno, setSelectedTechno] = useState('');

  const handleSelect = (e) => {
    setSelectedTechno(e.target.value);
  }

  useEffect(() => {
    fetch('https://api.nasa.gov/techtransfer/patent/?engine&api_key=zIGBlPJ9IjuQHnSeokX4LqZ9QPlri9jtdNaYJUZz')
    .then((resp) => resp.json())
    .then((data) => {
      setTechnos(data);

    setShowTechnos(!showTechnos);
  })}, [])

  
  return (
    <div>
    <div className="FilterButtonContainer">
      <select className="TechnoSelect" onClick={handleSelect}>
        <option value="">Select a category...</option>
        <option value="aerospace">aerospace</option>
        <option value="information technology and software">information technology and software</option>
        <option value="sensors">sensors</option>
        <option value="mechanical and fluid systems">mechanical and fluid systems</option>
        <option value="materials and coatings">materials and coatings</option>
        <option value="instrumentation">instrumentation</option>
        <option value="manufacturing">manufacturing</option>
        <option value="power generation and storage">power generation and storage</option>
        <option value="electrical and electronics">electrical and electronics</option>
      </select>
    </div>
    <div className="CardContainer">
    {showTechnos && technos.results
    .filter((techno) => (techno[5].includes(`${selectedTechno}`)))
    .map((techno)=>{
      return <TechnoCard name={techno[1]} image={techno[10]} id={techno[12]} />
    })}
    </div>
    </div>
  )
}