import React, { useState } from "react";
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
      navigate(`./products/all/?q=${encodeURIComponent(searchText)}`, {
        state: { albums },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSearchRequest();
    }
  };

  return (
    <div className="searchBox active">
      <input
        className="searchInput"
        type="text"
        name=""
        placeholder="what are you looking for?"
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
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
