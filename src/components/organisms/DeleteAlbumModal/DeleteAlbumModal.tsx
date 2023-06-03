import React from "react";
import "./DeleteAlbumModal.scss";
import Modal from "../Modal/Modal";
import { FormattedMessage } from "react-intl";
import Button from "../../atoms/Button/Button";
import axios from "axios";

const DeleteAlbumModal = ({
  setIsModalDisplayed,
  albumId,
  fetchProducts,
}: {
  setIsModalDisplayed: any;
  albumId: string;
  fetchProducts: any;
}) => {
  const handleNoButton = () => {
    setIsModalDisplayed(false);
  };

  const handleYesButton = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/albums/deleteAlbum/${albumId}`
      );
      console.log(response);
      setIsModalDisplayed(false);
      fetchProducts();
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

export default DeleteAlbumModal;
