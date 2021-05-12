import React, {useState} from 'react';

import './ShopperForm.css';


export default function ShopperForm() {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userComment, setUserComment] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const postComment = { firstname: userFirstName, lastname: userLastName, email: userEmail, comment: userComment };

    console.log(postComment)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postComment),
    };
    fetch('http://localhost:5000/contacts', requestOptions).then((response) => response.json());

    setUserFirstName('');
    setUserLastName('');
    setUserEmail('');
    setUserComment('')
   ;}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="Form-container">
          <div>
            <label htmlFor="name">Firstname</label>
            <br></br>
            <input className="input" placeholder="Type your firstname here..." value={userFirstName} type="text" onChange={(e) => setUserFirstName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="name">Lastname</label>
            <br></br>
            <input className="input" placeholder="Type your lastname here..." value={userLastName} type="text" onChange={(e) => setUserLastName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="name">E-mail</label>
            <br></br>
            <input className="input" placeholder="Type your email here..." value={userEmail} type="text" onChange={(e) => setUserEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="message">Your question</label>
            <br></br>
            <textarea value={userComment} type="text" onChange={(e) => setUserComment(e.target.value)} required></textarea>
          </div>
          <div>
            <button className="ShopperForm" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}