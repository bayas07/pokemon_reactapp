import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form>
      <div className="searchbar-container">
        <input
          type="text"
          aria-label="search"
          placeholder="Search your pokemon here"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </form>
  );
};

export default SearchBar;
