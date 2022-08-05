import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardList from "../../components/card/CardList";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "cardData/fetchRequested" });
  }, []);
  return <CardList />;
};

export default Home;
