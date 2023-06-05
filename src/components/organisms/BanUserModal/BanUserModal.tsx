import React from "react";
import "./BanUserModal.scss";
import Modal from "../Modal/Modal";
import { FormattedMessage } from "react-intl";
import Button from "../../atoms/Button/Button";
import axios from "axios";

const BanUserModal = ({
  setIsModalDisplayed,
  userId,
  fetchUsers,
}: {
  setIsModalDisplayed: any;
  userId: string;
  fetchUsers: any;
}) => {
  const handleNoButton = () => {
    setIsModalDisplayed(false);
  };

  const handleYesButton = async () => {
    try {
      await axios.put(`http://localhost:8000/api/users/banUser/${userId}`);
      setIsModalDisplayed(false);
      fetchUsers();
    } catch (error) {}
  };

  return (
    <Modal setIsModalDisplayed={setIsModalDisplayed}>
      <div className="delete-modal--container">
        are you sure you want to ban this user?
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

export default BanUserModal;
