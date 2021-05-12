import React, { useState, useEffect } from 'react';

import './SellersCard.css';


export default function SellersCard(props) {

  const [rating, setRating] = useState ('');
  const [name, setName] = useState ('');
  const [comment, setComment] = useState ();
  const [displayComment, setDisplayComment] = useState('');
  const [showRating, setShowRating] = useState(false);

  const handleClick = (e) =>{
    setShowRating(!showRating)
  }

  useEffect(() => {
    fetch('http://localhost:5000/sellerone/'+ props.name)
    .then((resp)=> resp.json())
    .then((data)=>{
      setDisplayComment(data);
    console.log(displayComment);
    })
    
  }, []);

  const handleChange = (e) => {
     setRating(e.target.value);
     console.log(rating)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const postAdvice = {seller: props.name, comment: comment, author: name, rating: rating, };

    console.log(postAdvice)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postAdvice),
    };
    fetch('http://localhost:5000/sellerone', requestOptions).then((response) => response.json());

    setName('');
    setComment();
    setRating('');
    

  }

  const handleName = (e) => {
      setName(e.target.value);
      console.log(name);
  }

  const handleComment = (e) => {
    setComment(e.target.value);
    console.log(comment);
  }

  return (
    <div className="SellersCardContainer">
      <h2 className="SellerCardTitle">{props.name}</h2>
      <p>Country : {props.nationality}</p>
      <img src={props.avatar} alt="SellersCardAvatar" className="SellersCardAvatar"/>
      <form onSubmit={handleSubmit} className="SellersCardForm">

        <label  className="Rating-Span">Name</label>
        <input value={name} onChange={handleName}type="text"></input>

        <label className="Rating-Span">Comment</label>
        <input value={comment} onChange={handleComment} type="text"></input>

        <label>Rating</label>
        <div className="Rating-Container">
        <span>
        <label>1</label>
        <input name="1" value="1" onChange={handleChange} type="radio"></input>
        </span>
        <span >
        <label>2</label>
        <input name="1" value="2" onChange={handleChange} type="radio"></input>
        </span>
        <span>
        <label>3</label>
        <input name="1" value="3" onChange={handleChange} type="radio"></input>
        </span>
        <span>
        <label>4</label>
        <input name="1" value="4" onChange={handleChange} type="radio"></input>
        </span>
        <span >
        <label>5</label>
        <input name="1" value="5" onChange={handleChange} type="radio"></input>
        </span>
        </div>

        <button type="submit">Send</button>
      </form>
      <button className="btn-show"onClick={handleClick}>Show Rating</button>
      {showRating && displayComment.map((comment)=>{
          return(
          
            <div className="comment-box">
            <p className="Comment-P">{comment.comment}</p>
            <p className="Comment-P">{comment.author}</p>
            <p className="Comment-P">Rating : {comment.rating}</p>
            </div>
            
          )
        })
      }
    </div>
  )
}
