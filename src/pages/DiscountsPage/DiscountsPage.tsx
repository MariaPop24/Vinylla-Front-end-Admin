import React, { useEffect, useState } from "react";
import "./DiscountsPage.scss";
import Navbar from "../../components/organisms/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";
import Button from "../../components/atoms/Button/Button";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import DiscountCard from "../../components/molecules/DiscountCard/DiscountCard";
import AddDiscountModal from "../../components/organisms/AddDiscountModal/AddDiscountModal";

const DiscountsPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [discounts, setDiscounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addDiscountModal, setAddDiscountModal] = useState(false);
  const user = localStorage.getItem("usersData");

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
  };

  const handleSearchRequest = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/discounts/searchDiscount/${searchText}`
      );
      const discounts = response.data.discounts;
      setDiscounts(discounts);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const fetchDiscounts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/discounts/getDiscounts"
      );
      const discounts = response.data.discounts;
      setDiscounts(discounts);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDiscounts();
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
        <TextBlock messageId="pages.discounts.title" />
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
            name={<FormattedMessage id="pages.discounts.add-btn" />}
            onClick={() => setAddDiscountModal(true)}
          />
        </div>
        <div className="all-product--albums">
          {isLoading ? (
            <div className="all-products--spinner">
              <BeatLoader />
            </div>
          ) : (
            <div className="all-products--list">
              {discounts.length > 0 ? (
                discounts.map((item: any, index: number) => (
                  <div key={index}>
                    <DiscountCard
                      item={item}
                      setIsLoading={setIsLoading}
                      fetchDiscounts={fetchDiscounts}
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
      {addDiscountModal && (
        <AddDiscountModal
          fetchDiscounts={fetchDiscounts}
          setIsModalDisplayed={setAddDiscountModal}
        />
      )}
    </div>
  );
};

export default DiscountsPage;
