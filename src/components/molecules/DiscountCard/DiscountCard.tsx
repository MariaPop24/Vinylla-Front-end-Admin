import React, { useState } from "react";
import "./DiscountCard.scss";
import { formatDateDiscount } from "../../../utils/formatDateDiscount";
import Tooltip from "../../atoms/Tooltip/Tooltip";
import { FormattedMessage } from "react-intl";
import Button from "../../atoms/Button/Button";
import DeleteDiscountModal from "../../organisms/DeleteDiscountModal/DeleteDiscountModal";
import ViewDiscountModal from "../../organisms/ViewDiscountModal/ViewDiscountModal";

const DiscountCard = ({
  item,
  fetchDiscounts,
}: {
  item: any;
  fetchDiscounts: any;
}) => {
  const currentDate = new Date();
  const [deleteDiscountModal, setDeleteDiscountModal] = useState(false);
  const [viewDiscountModal, setViewDiscountModal] = useState(false);

  const getExpirationText = () => {
    const endDate = new Date(item.endDate);
    if (currentDate > endDate) {
      return (
        <span className="expired">
          expired on {formatDateDiscount(item.endDate)}
        </span>
      );
    }
    return (
      <span className="expires">
        expires on {formatDateDiscount(item.endDate)}
      </span>
    );
  };

  return (
    <div className="album-card--container discount-card--container">
      <div className="discount-card--left">
        <div className="discount-card--code">{item.code}</div>
        <div>(-{item.value}%)</div>
        <div className="discount-card--date">{getExpirationText()}</div>
      </div>
      <div className="discount-card--right">
        <Tooltip text={<FormattedMessage id="pages.allProducts.see-more" />}>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/EyeIcon.png")}
            onClick={() => setViewDiscountModal(true)}
          />
        </Tooltip>
        <Tooltip text={<FormattedMessage id="pages.allProducts.edit" />}>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/EditIcon.png")}
            // onClick={handleDeleteModal}
          />
        </Tooltip>
        <Tooltip text={<FormattedMessage id="pages.allProducts.delete" />}>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/BinIcon.png")}
            onClick={() => setDeleteDiscountModal(true)}
          />
        </Tooltip>
      </div>
      {deleteDiscountModal && (
        <DeleteDiscountModal
          setIsModalDisplayed={setDeleteDiscountModal}
          fetchDiscounts={fetchDiscounts}
          discountId={item._id}
        />
      )}
      {viewDiscountModal && (
        <ViewDiscountModal
          discountId={item._id}
          setIsModalDisplayed={setViewDiscountModal}
        />
      )}
    </div>
  );
};

export default DiscountCard;
