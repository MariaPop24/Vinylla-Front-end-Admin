import React, { useEffect, useState } from "react";
import "./ReportCard.scss";
import { FormattedMessage } from "react-intl";
import Tooltip from "../../atoms/Tooltip/Tooltip";
import Button from "../../atoms/Button/Button";
import { formatDate } from "../../../utils/formatDate";
import DeleteReportModal from "../../organisms/DeleteReportModal/DeleteReportModal";
import ViewReportModal from "../../organisms/ViewReportModal/ViewReportModal";
import axios from "axios";

const ReportCard = ({
  item,
  fetchReports,
}: {
  item: any;
  fetchReports: any;
}) => {
  const [deleteReportModal, setDeleteReportModal] = useState(false);
  const [viewReportModal, setViewReportModal] = useState(false);
  const [seen, setSeen] = useState(false);

  const handleViewReport = async () => {
    setViewReportModal(true);
    setSeen(true);
    if (!item.seen) {
      try {
        const response = await axios.put(
          `http://localhost:8000/api/reports/markAsRead/${item._id}`
        );
      } catch (error) {}
    }
  };

  useEffect(() => {
    setSeen(item.seen);
  }, [item.seen]);

  useEffect(() => {
    setSeen(item.seen);
  }, [item]);

  return (
    <div
      className="album-card--container report-card--container"
      style={{ height: "3rem", fontWeight: seen ? "normal" : "bold" }}
    >
      <div className="report-card--title">
        {item.resolved ? (
          <div className="report-card--resolved">
            <FormattedMessage id="molecules.report-card.resolved.true" />
          </div>
        ) : (
          <>
            {seen ? (
              <FormattedMessage id="molecules.report-card.seen.true" />
            ) : (
              <FormattedMessage id="molecules.report-card.seen.false" />
            )}
          </>
        )}
      </div>
      <div className="album-card--buttons-container">
        <span>{formatDate(item.createdAt)}</span>
        <Tooltip text={<FormattedMessage id="pages.allProducts.see-more" />}>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/EyeIcon.png")}
            onClick={handleViewReport}
          />
        </Tooltip>
        <Tooltip text={<FormattedMessage id="pages.allProducts.delete" />}>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/BinIcon.png")}
            onClick={() => setDeleteReportModal(true)}
          />
        </Tooltip>
      </div>
      {deleteReportModal && (
        <DeleteReportModal
          setIsModalDisplayed={setDeleteReportModal}
          reportId={item._id}
          fetchReports={fetchReports}
        />
      )}
      {viewReportModal && (
        <ViewReportModal
          setIsModalDisplayed={setViewReportModal}
          reportId={item._id}
          fetchReports={fetchReports}
        />
      )}
    </div>
  );
};

export default ReportCard;
