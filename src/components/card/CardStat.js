import React from "react";
import "./CardStat.css";

const CardStat = ({ stats, id }) => {
  return (
    <div className="card-stats">
      {stats.map((item) => {
        return (
          <div className="card-stats-item" key={`${item.stat.name}-${id}`}>
            <label
              className="card-stats-item-name"
              htmlFor={`${item.stat.name}-${id}`}
            >
              {item.stat.name}
            </label>
            <meter
              id={`${item.stat.name}-${id}`}
              value={item.base_stat}
              min="0"
              max="120"
            >
              {item.base_stat} out of 100
            </meter>
            <span className="card-stats-item-value">{item.base_stat}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CardStat;
