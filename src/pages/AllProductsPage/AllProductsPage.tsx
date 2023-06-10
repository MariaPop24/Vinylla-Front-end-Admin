import React, { useEffect, useState } from "react";
import "./AllProductsPage.scss";
import Navbar from "../../components/organisms/Navbar/Navbar";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";
import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import AlbumCard from "../../components/molecules/AlbumCard/AlbumCard";
import { BeatLoader } from "react-spinners";

const AllProductsPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = localStorage.getItem("usersData");

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
  };

  const handleSearchRequest = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/albums/searchAlbum/${searchText}`
      );
      const albums = response.data.albums;
      setProducts(albums);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  ///
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/albums/getAlbums"
      );
      const albums = response.data.albums;
      setProducts(albums);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchText) {
      handleSearchRequest();
    }
  }, [searchText]);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <div className="all-products--container">
        <TextBlock messageId="pages.allProducts.title" />
        <div className="all-products--search">
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
              iconLeft={require("../../assets/icons/SearchIcon.png")}
              onClick={handleSearchRequest}
            />
          </div>
          <Button
            className="clasa btn-secondary-style "
            iconClassName="icon"
            hasIconLeft={true}
            iconLeft={require("../../assets/icons/PlusIcon.png")}
            name={<FormattedMessage id="pages.allProducts.add-btn" />}
            onClick={handleAddProduct}
          />
        </div>
        <div className="all-product--albums">
          {isLoading ? (
            <div className="all-products--spinner">
              <BeatLoader />
            </div>
          ) : (
            <div className="all-products--list">
              {products && products.length > 0 ? (
                products.map((item: any, index: number) => (
                  <div key={index}>
                    <AlbumCard
                      item={item}
                      setIsLoading={setIsLoading}
                      fetchProducts={fetchProducts}
                    />
                  </div>
                ))
              ) : (
                <div className="all-products--no-results">
                  <FormattedMessage id="pages.allProducts.no-results" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
