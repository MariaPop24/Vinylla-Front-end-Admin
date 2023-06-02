import React from "react";
import "./Avatar.scss";

const Avatar = ({ onClick, userName }: Props) => {
  let firstLetters;
  if (userName) {
    const names = userName.split(" ");
    firstLetters = names[0][0] + names[1][0];
  }
  return (
    <div onClick={onClick} className="avatar--container">
      {firstLetters && firstLetters.toUpperCase()}
    </div>
  );
};

type Props = {
  onClick?: () => void;
  userName?: string | null;
};

export default Avatar;
