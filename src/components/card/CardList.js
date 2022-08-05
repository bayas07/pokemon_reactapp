import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./CardList.css";

const CardList = () => {
  const { loading, error, cardData } = useSelector((state) => state.cardData);

  if (loading) return <p className="center">loading...</p>;
  if (error) return <h4 className="center">Something Went Wrong</h4>;
  return (
    <div className="card-list">
      <Card cardData={cardData} />
    </div>
  );
};

export default CardList;
