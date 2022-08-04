import React from "react";
import SearchBar from "../searchbar/SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
