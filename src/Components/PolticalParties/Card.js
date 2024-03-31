import React from "react";
// import "./Parties.css";
import "./Card.css"

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="party-card">
      <div className="party-details">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="party-logo">
        <img src={image} alt={"Alternate"} height={60} width={70} />
      </div>
    </div>
  );
};

export default Card;
