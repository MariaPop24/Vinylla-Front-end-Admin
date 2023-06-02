import React from "react";
import "./AlbumCard.scss";
import Button from "../../atoms/Button/Button";
import Tooltip from "../../atoms/Tooltip/Tooltip";
import { FormattedMessage } from "react-intl";

const AlbumCard = ({ item }: { item: any }) => {
  return (
    <div className="album-card--container">
      <img src={item.images[0]} className="album-card--cover" />
      <span className="album-card--text">
        {item.title + " - " + item.artist}
      </span>
      <div className="album-card--buttons-container">
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
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default AlbumCard;
