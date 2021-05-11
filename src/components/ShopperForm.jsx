import React, {useState} from 'react';
import './ShopperForm.css';

function ShopperForm() {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userComment, setUserComment] = useState();

  const postComment = { firstname: userFirstName, lastname: userLastName, email: userEmail, comment: userComment };
  
  const handleSubmit = (e) => {
    e.preventDefault();
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
            <label htmlFor="name">firstname</label>
            <br></br>
            <input className="input" value={userFirstName} type="text" onChange={(e) => setUserFirstName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="name">lastname</label>
            <br></br>
            <input className="input" value={userLastName} type="text" onChange={(e) => setUserLastName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="name">e-mail</label>
            <br></br>
            <input className="input" value={userEmail} type="text" onChange={(e) => setUserEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="message">your question</label>
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

export default ShopperForm;