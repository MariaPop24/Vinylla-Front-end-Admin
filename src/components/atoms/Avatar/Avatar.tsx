import React from "react";
import "./Avatar.scss";

const Avatar = ({ onClick }: Props) => {
  const userData = localStorage.getItem("usersData");
  console.log(userData);
  let userName = null;
  if (userData) {
    userName = JSON.parse(userData);
    userName = userName.firstName + " " + userName.lastName;
  }
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
};

export default Avatar;
