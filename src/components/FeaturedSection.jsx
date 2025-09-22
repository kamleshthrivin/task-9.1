import React from "react";
import Card from "./Card";
import "./FeaturedSection.css";

const FeaturedSection = ({ title, items }) => {
  return (
    <section className="featured container">
      <h2 className="section-title">{title}</h2>
      <div className="cards-grid">
        {items.map((it, i) => (
          <Card key={i} item={it} />
        ))}
      </div>
      <div className="see-all">
        <button className="see-all-btn">See all {title.toLowerCase()}</button>
      </div>
    </section>
  );
};

export default FeaturedSection;

