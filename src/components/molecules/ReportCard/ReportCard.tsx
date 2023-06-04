import React from "react";
import "./ReportCard.scss";
import { FormattedMessage } from "react-intl";
import Tooltip from "../../atoms/Tooltip/Tooltip";
import Button from "../../atoms/Button/Button";
import { formatDate } from "../../../utils/formatDate";

const ReportCard = ({
  item,
  setIsLoading,
  fetchReports,
}: {
  item: any;
  setIsLoading: any;
  fetchReports: any;
}) => {
  return (
    <div
      className="album-card--container report-card--container"
      style={{ height: "3rem", fontWeight: `${!item.seen && "bold"}` }}
    >
      <div className="report-card--title">
        {item.resolved ? (
          <div className="report-card--resolved">
            <FormattedMessage id="molecules.report-card.resolved.true" />
          </div>
        ) : (
          <>
            {item.seen ? (
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
          />
        </Tooltip>
        <Tooltip text={<FormattedMessage id="pages.allProducts.delete" />}>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/BinIcon.png")}
            // onClick={() => setDeleteDiscountModal(true)}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default ReportCard;
