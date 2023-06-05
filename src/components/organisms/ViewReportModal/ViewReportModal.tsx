import React, { useEffect, useState } from "react";
import "./ViewReportModal.scss";
import Modal from "../Modal/Modal";
import Button from "../../atoms/Button/Button";
import axios from "axios";
import { formatDateDiscount } from "../../../utils/formatDateDiscount";
import { BeatLoader } from "react-spinners";
import Review from "../../molecules/Review/Review";

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
  const [review, setReview] = useState<any>();

  const fetchReportData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/reports/getReport/${reportId}`
      );
      const report = response.data.report;
      const resp = await axios.get(
        `http://localhost:8000/api/reviews/getReviewById/${report.review}`
      );
      setReport(report);
      setReview(resp.data.review);
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
      <div className="view-report--container">
        <div className="view-report--header">
          <p>report details</p>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/CloseIcon.png")}
            onClick={() => setIsModalDisplayed(false)}
          />
        </div>
        {isLoading ? (
          <div className="view-report--spinner">
            <BeatLoader />
          </div>
        ) : (
          report && (
            <>
              <div className="view-discount--info" style={{ padding: "0% 5%" }}>
                <div className="view-discount--item">
                  <p className="view-discount--label">reason</p>
                  <p className="view-discount--value">{report.reportReason}</p>
                </div>
                <div className="view-discount--item">
                  <p className="view-discount--label">reporter</p>
                  <p className="view-discount--value">
                    {report.reporterAddress}
                  </p>
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
              {isLoading ? (
                <div className="all-products--spinner">
                  <BeatLoader />
                </div>
              ) : (
                review && <Review review={review} />
              )}
            </>
          )
        )}
        <div className="view-report--footer">
          {report &&
            (!report.resolved ? (
              <>
                <span className="view-report--warning">
                  *if you consider this reporting reason to be valid, the author
                  will receive a banning warning
                </span>
                <div className="view-report--btn-container">
                  <Button className="btn-primary-style" name="invalidate" />
                  <Button className="btn-primary-style" name="validate" />
                </div>
              </>
            ) : (
              <span className="view-report--resolved">already resolved</span>
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default ViewReportModal;
