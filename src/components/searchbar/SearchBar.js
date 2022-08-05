import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState();

  const onChangeHandler = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };
  const onKeyPressHandler = ({ key }) => {
    if (key === "Enter") {
      console.log("Search completed");
    }
  };
  const searchHandler = () => {
    console.log("Search completed");
  };
  console.log(searchInput, "searchInput");
  return (
    <div className="searchbar-container">
        <input
          type="text"
          aria-label="search"
          placeholder="Search your pokemon here"
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"
          onClick={searchHandler}
        />
    </div>
  );
};

export default SearchBar;
