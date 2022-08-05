import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../loading_spinner/Spinner";

const AuthSearchedCard = ({ children }) => {
  const { pokemonName } = useParams();
  console.log(pokemonName, "pokemonName")

  const dispatch = useDispatch();

  const searchTerm = pokemonName.trim().toLowerCase();

  useEffect(() => {
    dispatch({ type: "searchedCardData/fetchRequested", payload: searchTerm });
  }, [searchTerm, dispatch]);

  const { loading, error, emptyResults, searchedCardData } = useSelector(
    (state) => state.searchedCardData
  );

  console.log(
    loading,
    error,
    emptyResults,
    searchedCardData,
    "loading, error, emptyResults, searchedCardData"
  );

  if (emptyResults)
    return (
      <h2 className="center">{`We couldn't find results for "${searchTerm}"`}</h2>
    );
  if (loading) return <Spinner />;
  if (error) return <h2 className="center">Something Went Wrong</h2>;

  return children;
};

export default AuthSearchedCard;
