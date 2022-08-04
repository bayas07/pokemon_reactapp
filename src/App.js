import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import CardList from "./components/card/CardList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "cardData/fetchRequested" });
  }, []);

  return (
    <main className="App">
      <CardList />
    </main>
  );
}

export default App;
