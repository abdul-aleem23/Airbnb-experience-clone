import React from "react"

export default function Card(props) {
  return (
    <div className="Card--div">
      <img className="Card--image" src={`./images/${props.img}`} />
      <div className="Card--stats">
        <img className="star-icon" src="/images/star-icon.png"></img>
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) &#183;</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span>/ person</p>
    </div>
  )
}