import React, { useState, useEffect } from "react";
import Button from "../../atoms/Button/Button";
import "./SearchBar.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
  };

  const handleSearchRequest = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/albums/searchAlbum/${searchText}`
      );
      const albums = response.data.albums;
      console.log(albums);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchText) {
      handleSearchRequest();
    }
  }, [searchText]);

  return (
    <div className="searchBox active">
      <input
        className="searchInput"
        type="text"
        name=""
        placeholder="what are you looking for?"
        onChange={handleSearch}
      />
      <Button
        className="searchButton"
        iconClassName="menu-icon"
        hasIconLeft={true}
        iconLeft={require("../../../assets/icons/SearchIcon.png")}
        onClick={handleSearchRequest}
      />
    </div>
  );
};

export default SearchBar;
