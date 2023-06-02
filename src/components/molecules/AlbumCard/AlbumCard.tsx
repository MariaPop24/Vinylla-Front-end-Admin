import React from "react";
import "./AlbumCard.scss";
import Button from "../../atoms/Button/Button";

const AlbumCard = ({ item }: { item: any }) => {
  return (
    <div className="album-card--container">
      <img src={item.images[0]} className="album-card--cover" />
      <span className="album-card--text">
        {item.title + " - " + item.artist}
      </span>
      <div className="album-card--buttons-container">
        <Button
          className="album-card--button"
          iconClassName="album-card--icons"
          hasIconOnly={true}
          icon={require("../../../assets/icons/EyeIcon.png")}
        />
        <Button
          className="album-card--button"
          iconClassName="album-card--icons"
          hasIconOnly={true}
          icon={require("../../../assets/icons/BinIcon.png")}
        />
      </div>
    </div>
  );
};

export default AlbumCard;
