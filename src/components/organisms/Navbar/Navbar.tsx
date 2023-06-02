import React from "react";
import "./Navbar.scss";
import { FormattedMessage } from "react-intl";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleProductsPage = () => {
    navigate("/products");
  };

  const handleUsersPage = () => {
    navigate("/users");
  };
  const handleReportsPage = () => {
    navigate("/reports");
  };
  const handleDiscountsPage = () => {
    navigate("/discounts");
  };
  return (
    <nav>
      <Button
        className="menu-option"
        iconClassName="menu-icon"
        name={<FormattedMessage id="organisms.products" />}
        hasIconLeft={true}
        iconLeft={require("../../../assets/icons/VinylIcon.png")}
        onClick={handleProductsPage}
      />
      <Button
        className="menu-option"
        iconClassName="menu-icon"
        name={<FormattedMessage id="organisms.users" />}
        hasIconLeft={true}
        iconLeft={require("../../../assets/icons/UserIcon.png")}
        onClick={handleProductsPage}
      />
      <Button
        className="menu-option"
        iconClassName="menu-icon"
        name={<FormattedMessage id="organisms.reports" />}
        hasIconLeft={true}
        iconLeft={require("../../../assets/icons/FlagIcon.png")}
        onClick={handleProductsPage}
      />
      <Button
        className="menu-option"
        iconClassName="menu-icon"
        name={<FormattedMessage id="organisms.discounts" />}
        hasIconLeft={true}
        iconLeft={require("../../../assets/icons/DiscountIcon.png")}
        onClick={handleProductsPage}
      />
    </nav>
  );
};

export default Navbar;
