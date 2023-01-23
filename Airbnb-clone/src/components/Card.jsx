import React from "react"

export default function Card() {
  return (
    <div className="Card--div">
        <img className="Card--image" src="./src/images/card-image1.png"></img>
      <div className="Card--stats">
        <img className="star-icon" src="./src/images/star-icon.png"></img>
        <span> 5.0</span>
        <span className="gray">(30) &#183;</span>
        <span className="gray">USA</span>
      </div>
      <p>Learn wedding photography</p>
      <p><span className="bold">From $125</span>/ person</p>
    </div>
  )
}