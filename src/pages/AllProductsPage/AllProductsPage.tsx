import React, { useEffect } from "react";
import "./AllProductsPage.scss";
import Navbar from "../../components/organisms/Navbar/Navbar";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import Button from "../../components/atoms/Button/Button";
import { FormattedMessage } from "react-intl";

const AllProductsPage = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("usersData");
  console.log(user);

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
          <SearchBar />
          <Button
            className="btn-secondary-style"
            iconClassName="icon"
            hasIconLeft={true}
            iconLeft={require("../../assets/icons/PlusIcon.png")}
            name={<FormattedMessage id="pages.allProducts.add-btn" />}
          />
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
