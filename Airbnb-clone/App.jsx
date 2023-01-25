import React from "react";
import Header from "./src/components/Header";
import HeroSection from "./src/components/HeroSection";
import Card from "./src/components/Card";
import data from "./data";

export default function App() {

  const cards = data.map(info => {
    return <Card
    key={info.id}
    info={info}
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