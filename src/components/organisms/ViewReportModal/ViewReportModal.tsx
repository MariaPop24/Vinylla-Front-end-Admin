import React from "react";
import "./ViewReportModal.scss";
import Modal from "../Modal/Modal";
import Button from "../../atoms/Button/Button";

const ViewReportModal = ({
  setIsModalDisplayed,
  reportId,
  fetchReports,
}: {
  setIsModalDisplayed: any;
  reportId: string;
  fetchReports: any;
}) => {
  return (
    <Modal setIsModalDisplayed={setIsModalDisplayed}>
      <div className="add-discount--container">
        <div className="add-discount--header">
          <p>report details</p>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/CloseIcon.png")}
            onClick={() => setIsModalDisplayed(false)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ViewReportModal;
