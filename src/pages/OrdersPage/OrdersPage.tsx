import React, { useEffect, useState } from "react";
import "./OrdersPage.scss";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { FormattedMessage } from "react-intl";
import Tooltip from "../../components/atoms/Tooltip/Tooltip";
import Button from "../../components/atoms/Button/Button";
import Navbar from "../../components/organisms/Navbar/Navbar";

const OrdersPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const user = localStorage.getItem("usersData");

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/orders/getOrders"
      );
      const orders = response.data.orders;
      setOrders(orders);
      console.log(orders);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  function formatDateToDDMMYYYY(dateString: any) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Note: Month is zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <Navbar />
      <div className="all-products--container">
        <TextBlock text="here are all the orders" />
        <div className="all-product--albums">
          {isLoading ? (
            <div className="all-products--spinner">
              <BeatLoader />
            </div>
          ) : (
            <div className="all-products--list">
              {orders && orders.length > 0 ? (
                orders.map((item: any, index: number) => (
                  <div key={index}>
                    <div key={index} className="order-card--container">
                      <div className="order-card--info">
                        <div className="order-card--number">
                          tracking number: {item.trackingNumber}
                        </div>
                        <div className="order-card--details">
                          <span className="order-card--status">
                            {item.status}
                          </span>{" "}
                          | {formatDateToDDMMYYYY(item.deliveryDate)} | $
                          {item.orderPrice}
                        </div>
                        <div className="order-card--details">
                          {item.addressFirstName +
                            " " +
                            item.addressLastName +
                            ", " +
                            item.addressPhone}
                        </div>
                        <div className="order-card--details">
                          {item.addressCountry +
                            " " +
                            item.addressRegion +
                            ", " +
                            item.address +
                            ", " +
                            item.addressZipCode}
                        </div>
                      </div>
                    </div>
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
    </>
  );
};

export default OrdersPage;
