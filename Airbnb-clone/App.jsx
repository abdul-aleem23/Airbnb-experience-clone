import React from "react";
import Header from "./src/components/Header";
import HeroSection from "./src/components/HeroSection";
import Card from "./src/components/Card";
import data from "./data";

export default function App() {

  const cards = data.map(info => {
    return <Card
    img={info.coverImg}
    rating={info.stats.rating}
    reviewCount={info.stats.reviewCount}
    location={info.location}
    title={info.title}
    price={info.price}
    />
  })
  return (
    <>
      <Header />
      <HeroSection />
      <div className="Card--list">
        {cards}
      </div>
      
    </>
  )
}