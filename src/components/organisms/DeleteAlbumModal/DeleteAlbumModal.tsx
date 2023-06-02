import React from "react";
import "./DeleteAlbumModal.scss";
import Modal from "../Modal/Modal";
import { FormattedMessage } from "react-intl";
import Button from "../../atoms/Button/Button";

const DeleteAlbumModal = ({
  setIsModalDisplayed,
}: {
  setIsModalDisplayed: any;
}) => {
  const handleNoButton = () => {
    setIsModalDisplayed(false);
  };

  const handleYesButton = async () => {
    try {
      setIsModalDisplayed(false);
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
