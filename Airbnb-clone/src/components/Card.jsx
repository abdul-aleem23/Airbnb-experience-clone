import React from "react"

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "Online"
  }
  return (
    <div className="Card--div">
      {badgeText && <div className="Card--badge">{badgeText}</div>}
      <img className="Card--image" src={`./images/${props.coverImg}`} />
      <div className="Card--stats">
        <img className="star-icon" src="/images/star-icon.png"></img>
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) &#183;</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span>/ person</p>
    </div>
  )
}