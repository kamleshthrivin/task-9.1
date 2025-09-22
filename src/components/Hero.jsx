import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <img
          className="hero-image"
          src="https://www.mbanews.com.au/wp-content/uploads/2024/07/deakin.webp"
          alt="hero banner"
        />
        <div className="hero-caption">
          <h1>DEV@Deakin — Where you can build your Future</h1>
          <p>Explore Our Top Picks in Tech & Learning.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
