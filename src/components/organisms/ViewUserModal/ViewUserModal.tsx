import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../../atoms/Button/Button";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import { formatDateDiscount } from "../../../utils/formatDateDiscount";

const ViewUserModal = ({
  userId,
  setIsModalDisplayed,
}: {
  userId: string;
  setIsModalDisplayed: any;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<any>();

  const fetchUserById = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/users/getUserById/${userId}`
      );
      const user = response.data.user;
      setUserDetails(user);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserById();
  }, []);

  return (
    <Modal setIsModalDisplayed={setIsModalDisplayed}>
      <div className="add-discount--container">
        <div className="add-discount--header">
          <p>user details</p>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/CloseIcon.png")}
            onClick={() => setIsModalDisplayed(false)}
          />
        </div>
        {isLoading ? (
          <div className="all-products--spinner">
            <BeatLoader />
          </div>
        ) : (
          userDetails && (
            <div className="view-discount--info">
              <div className="view-discount--item">
                <p className="view-discount--label">email</p>
                <p className="view-discount--value">{userDetails.email} </p>
              </div>
              <div className="view-discount--item">
                <p className="view-discount--label">first name</p>
                {userDetails.firstName}
              </div>
              <div className="view-discount--item">
                <p className="view-discount--label">last name</p>
                <p className="view-discount--value">{userDetails.lastName}</p>
              </div>
              <div className="view-discount--item">
                <p className="view-discount--label">phone number</p>
                <p className="view-discount--value">
                  {userDetails.phoneNumber}{" "}
                </p>
              </div>
              <div className="view-discount--item">
                <p className="view-discount--label">reports count</p>
                <p className="view-discount--value">
                  {userDetails.reportsCount}
                </p>
              </div>
              <div className="view-discount--item">
                <p className="view-discount--label">banned</p>
                <p className="view-discount--value">
                  {userDetails.banned ? "yes" : "no"}
                </p>
              </div>
              <div className="view-discount--item">
                <p className="view-discount--label">created at</p>
                <p className="view-discount--value">
                  {formatDateDiscount(userDetails.createdAt)}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </Modal>
  );
};

export default ViewUserModal;
