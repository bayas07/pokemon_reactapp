import React from "react";
import { useParams } from "react-router-dom";


const SearchCard = () => {
  const { pokemonName } = useParams();  
  return <div>Search Card Page - {pokemonName}</div>;
};

export default SearchCard;
