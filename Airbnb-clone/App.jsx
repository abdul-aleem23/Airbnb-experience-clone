import React from "react";
import Header from "./src/components/Header";
import HeroSection from "./src/components/HeroSection";
import Card from "./src/components/Card";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Card
        img="Card-image1.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Learn wedding photography"
        price={125}
      />
    </>
  )
}