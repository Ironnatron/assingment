import React from "react";
import "./Parties.css";

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="card">
      <div className="details">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="logo">
        <img src={image} alt={"Alternate"} height={60} width={70} />
      </div>
    </div>
  );
};

export default Card;
