import React from "react";
import "./DeleteDiscountModal.scss";
import Modal from "../Modal/Modal";
import { FormattedMessage } from "react-intl";
import Button from "../../atoms/Button/Button";
import axios from "axios";

const DeleteDiscountModal = ({
  setIsModalDisplayed,
  discountId,
  fetchDiscounts,
}: {
  setIsModalDisplayed: any;
  discountId: string;
  fetchDiscounts: any;
}) => {
  const handleNoButton = () => {
    setIsModalDisplayed(false);
  };

  const handleYesButton = async () => {
    try {
      await axios.delete(
        `http://localhost:8000/api/discounts/deleteDiscount/${discountId}`
      );
      setIsModalDisplayed(false);
      fetchDiscounts();
    } catch (error) {}
  };
  return (
    <Modal setIsModalDisplayed={setIsModalDisplayed}>
      <div className="delete-modal--container">
        <FormattedMessage id="organisms.delete-modal.question" />
        <div className="delete-modal--buttons">
          <Button
            className="btn-tertiary-style"
            name={<FormattedMessage id="organisms.delete-modal.no-btn" />}
            onClick={handleNoButton}
          />
          <Button
            className="btn-tertiary-style"
            name={<FormattedMessage id="organisms.delete-modal.yes-btn" />}
            onClick={handleYesButton}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteDiscountModal;
