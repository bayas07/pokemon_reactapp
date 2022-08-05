import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/404/PageNotFound";
import AuthSearchedCard from "./components/searched_card/AuthSearchedCard";
import SearchCard from "./components/searched_card/SearchedCard";
import RouteWrapper from "./components/wrapper/RouteWrapper";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouteWrapper />}>
        <Route index element={<Home />} />
        <Route
          path="/search/:pokemonName"
          element={
            <AuthSearchedCard>
              <SearchCard />
            </AuthSearchedCard>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
