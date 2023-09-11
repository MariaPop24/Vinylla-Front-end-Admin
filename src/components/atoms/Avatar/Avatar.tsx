import React, { useState } from "react";
import "./Avatar.scss";
import Button from "../Button/Button";

const Avatar = ({}: Props) => {
  const userData = localStorage.getItem("usersData");
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleProfileOptions = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  let userName = null;
  let email = null;
  if (userData) {
    userName = JSON.parse(userData);
    console.log(userName);
    email = userName.email;
    userName = userName.firstName + " " + userName.lastName;
  }
  let firstLetters;
  if (userName) {
    const names = userName.split(" ");
    firstLetters = names[0][0] + names[1][0];
  }
  return (
    <div className="navbar--container">
      <div onClick={handleProfileOptions} className="avatar--container">
        {firstLetters && firstLetters.toUpperCase()}
      </div>
      {isMenuOpened && (
        <div className="navbar--content animate">
          <div className="navbar--email">{email}</div>
          <Button name="log out" className="btn-primary-style" />
        </div>
      )}
    </div>
  );
};

type Props = {
  onClick?: () => void;
};

export default Avatar;
