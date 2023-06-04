import React, { useEffect, useState } from "react";
import "./ViewDiscountModal.scss";
import Modal from "../Modal/Modal";
import Button from "../../atoms/Button/Button";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { formatDateDiscount } from "../../../utils/formatDateDiscount";

const ViewDiscountModal = ({
  discountId,
  setIsModalDisplayed,
}: {
  discountId: string;
  setIsModalDisplayed: any;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [discountDetails, setDiscountDetails] = useState<any>();

  const fetchDiscountById = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/discounts/getDiscount/${discountId}`
      );
      const discount = response.data.discount;
      setDiscountDetails(discount);
      console.log(discount);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDiscountById();
  }, []);

  return (
    <Modal setIsModalDisplayed={setIsModalDisplayed}>
      <div className="add-discount--container">
        <div className="add-discount--header">
          <p>discount details</p>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/CloseIcon.png")}
            onClick={() => setIsModalDisplayed(false)}
          />
        </div>
        {isLoading ? (
          <div className="all-products--spinner">
            <BeatLoader />
          </div>
        ) : (
          discountDetails && (
            <div className="view-discount--info">
              <div className="view-discount--item">
                <p className="view-discount--label">code</p>
                <p className="view-discount--value">
                  {discountDetails.code.toLowerCase()}
                </p>
              </div>
              <div className="view-discount--item">
                <p className="view-discount--label">value</p>
                <p className="view-discount--value">
                  -{discountDetails.value}%
                </p>
              </div>
              <div className="view-discount--item">
                <p className="view-discount--label">available from</p>
                <p className="view-discount--value">
                  {formatDateDiscount(discountDetails.startDate)}
                </p>
              </div>
              <div className="view-discount--item">
                <p className="view-discount--label">until</p>
                <p className="view-discount--value">
                  {formatDateDiscount(discountDetails.endDate)}
                </p>
              </div>
              <div className="view-discount--item">
                <p className="view-discount--label">created at</p>
                <p className="view-discount--value">
                  {formatDateDiscount(discountDetails.createdAt)}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </Modal>
  );
};

export default ViewDiscountModal;
