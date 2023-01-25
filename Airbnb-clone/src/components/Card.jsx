import React from "react"

export default function Card(props) {
  let badgeText
  if (props.info.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.info.location === "Online") {
    badgeText = "Online"
  }
  return (
    <div className="Card--div">
      {badgeText && <div className="Card--badge">{badgeText}</div>}
      <img className="Card--image" src={`./images/${props.info.coverImg}`} />
      <div className="Card--stats">
        <img className="star-icon" src="/images/star-icon.png"></img>
        <span>{props.info.stats.rating}</span>
        <span className="gray">({props.info.stats.reviewCount}) &#183;</span>
        <span className="gray">{props.info.location}</span>
      </div>
      <p>{props.info.title}</p>
      <p><span className="bold">From ${props.info.price}</span>/ person</p>
    </div>
  )
}