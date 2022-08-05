import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../loading_spinner/Spinner";
import Card from "./Card";
import "./CardList.css";

const CardList = () => {
  const { loading, error, cardData } = useSelector((state) => state.cardData);

  if (loading) return <Spinner />;
  if (error) return <h4 className="center">Something Went Wrong</h4>;
  return (
    <div className="card-list">
      <Card cardData={cardData} />
    </div>
  );
};

export default CardList;
