import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  const fullStars = Math.round(item.rating || 5);
  const stars =
    "★".repeat(fullStars) + "☆".repeat(Math.max(0, 5 - fullStars));

  return (
    <article className="card">
      <div className="card-thumb">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.description}</p>
        <div className="card-footer">
          <span className="rating">{stars}</span>
          <span className="author">{item.author}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
