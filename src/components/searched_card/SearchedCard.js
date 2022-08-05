import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import "./SearchedCard.css";

const SearchedCard = () => {
  const { searchedCardData } = useSelector((state) => state.searchedCardData);

  console.log(searchedCardData, "searchedCardData");

  return (
    <div className="search-card-list card-list">
      <Card cardData={searchedCardData} />
    </div>
  );
};

export default SearchedCard;
