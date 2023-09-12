import React, { useState } from "react";
import "./AlbumCard.scss";
import Button from "../../atoms/Button/Button";
import Tooltip from "../../atoms/Tooltip/Tooltip";
import { FormattedMessage } from "react-intl";
import DeleteAlbumModal from "../../organisms/DeleteAlbumModal/DeleteAlbumModal";

const AlbumCard = ({
  item,
  setIsLoading,
  fetchProducts,
}: {
  item: any;
  setIsLoading: any;
  fetchProducts: any;
}) => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const handleDeleteModal = () => {
    setIsDeleteModal(true);
  };

  return (
    <div className="album-card--container">
      <img src={item.images[0]} className="album-card--cover" />
      <span className="album-card--text">
        {item.title + " - " + item.artist}
      </span>
      <div className="album-card--buttons-container">
        <Tooltip text={<FormattedMessage id="pages.allProducts.delete" />}>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/BinIcon.png")}
            onClick={handleDeleteModal}
          />
        </Tooltip>
      </div>
      {isDeleteModal && (
        <DeleteAlbumModal
          setIsModalDisplayed={setIsDeleteModal}
          albumId={item._id}
          fetchProducts={fetchProducts}
        />
      )}
    </div>
  );
};

export default AlbumCard;
