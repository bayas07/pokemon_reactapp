import React from "react";
import "./Card.css";
import CardStat from "./CardStat";

const Card = ({ cardData, lastRef }) => {
  console.log(cardData, "cardData");
  
  return cardData.map((card, index) => {
    if (cardData.length === index + 1) {
      return (
        <div className="card" key={card.id} ref={lastRef}>
          <div className={`card-item ${card.types[0].type.name}`}>
            <div
              className={`card-image-container ${card.types[0].type.name}-image-bg`}
            >
              <img src={card.sprites.other["official-artwork"].front_default} />
            </div>
            <div className="card-index">#{card.id}</div>
            <div>{card.name}</div>
            <div>{card.types[0].type.name}</div>
          </div>
          <CardStat stats={card.stats} id={card.id} />
        </div>
      );
    }
    return (
      <div className="card" key={card.id}>
        <div className={`card-item ${card.types[0].type.name}`}>
          <div
            className={`card-image-container ${card.types[0].type.name}-image-bg`}
          >
            <img src={card.sprites.other["official-artwork"].front_default} />
          </div>
          <div className="card-index">#{card.id}</div>
          <div>{card.name}</div>
          <div>{card.types[0].type.name}</div>
        </div>
        <CardStat stats={card.stats} id={card.id} />
      </div>
    );
  });
};

export default Card;
