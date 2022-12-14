import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = ({ target: { value } }) => {
    setSearchInput(value.toLowerCase());
  };
  const onKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${searchInput}`);
    }
  };
  const searchHandler = () => {
    navigate(`/search/${searchInput}`);
  };
  return (
    <div className="searchbar-container">
      <input
        type="text"
        aria-label="search"
        placeholder="Search pokemon"
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
        value={searchInput}
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
