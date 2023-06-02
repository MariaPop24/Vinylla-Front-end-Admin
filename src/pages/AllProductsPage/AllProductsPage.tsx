import React, { useEffect } from "react";
import "./AllProductsPage.scss";
import Navbar from "../../components/organisms/Navbar/Navbar";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";

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
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
