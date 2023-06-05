import React, { useState } from "react";
import "./UserCard.scss";
import { FormattedMessage } from "react-intl";
import Button from "../../atoms/Button/Button";
import Tooltip from "../../atoms/Tooltip/Tooltip";
import UserAvatar from "../../atoms/UserAvatar/UserAvatar";
import ViewUserModal from "../../organisms/ViewUserModal/ViewUserModal";

const UserCard = ({ item, fetchUsers }: { item: any; fetchUsers: any }) => {
  const [viewUserModal, setViewUserModal] = useState(false);
  const [banUserModal, setBanUserModal] = useState(false);
  return (
    <div className="user-card--container ">
      <div className="user-card--title">
        <UserAvatar firstName={item.firstName} lastName={item.lastName} />
        <span>{item.email}</span>
      </div>
      <div className="album-card--buttons-container">
        <Tooltip text={<FormattedMessage id="pages.allProducts.see-more" />}>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/EyeIcon.png")}
            onClick={() => setViewUserModal(true)}
          />
        </Tooltip>
        {!item.banned && (
          <Tooltip text="ban">
            <Button
              className="album-card--button"
              iconClassName="album-card--icons"
              hasIconOnly={true}
              icon={require("../../../assets/icons/NotAllowedIcon.png")}
              // onClick={() => setDeleteReportModal(true)}
            />
          </Tooltip>
        )}
      </div>
      {viewUserModal && (
        <ViewUserModal
          setIsModalDisplayed={setViewUserModal}
          userId={item._id}
        />
      )}
    </div>
  );
};

export default UserCard;
