import React, { useEffect, useState } from "react";
import "./ViewReportModal.scss";
import Modal from "../Modal/Modal";
import Button from "../../atoms/Button/Button";
import axios from "axios";
import { formatDateDiscount } from "../../../utils/formatDateDiscount";

const ViewReportModal = ({
  setIsModalDisplayed,
  reportId,
  fetchReports,
}: {
  setIsModalDisplayed: any;
  reportId: string;
  fetchReports: any;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<any>();

  const fetchReportData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/reports/getReport/${reportId}`
      );
      const report = response.data.report;
      console.log(report);
      setReport(report);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReportData();
  }, []);

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
        {report && (
          <div className="view-discount--info">
            <div className="view-discount--item">
              <p className="view-discount--label">reason</p>
              <p className="view-discount--value">{report.reportReason}</p>
            </div>
            <div className="view-discount--item">
              <p className="view-discount--label">reporter</p>
              <p className="view-discount--value">{report.reporterAddress}</p>
            </div>
            <div className="view-discount--item">
              <p className="view-discount--label">author</p>
              <p className="view-discount--value">{report.authorAddress}</p>
            </div>
            <div className="view-discount--item">
              <p className="view-discount--label">sent on</p>
              <p className="view-discount--value">
                {formatDateDiscount(report.createdAt)}
              </p>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ViewReportModal;
