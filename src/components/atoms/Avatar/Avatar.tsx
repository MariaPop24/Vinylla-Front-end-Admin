import React, { useRef, useState } from "react";
import "./Avatar.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../../utils/useClickOutside";

const Avatar = ({}: Props) => {
  const menuRef = useRef(null);
  const userData = localStorage.getItem("usersData");
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const navigate = useNavigate();

  const handleProfileOptions = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleLogout = () => {
    localStorage.removeItem("usersData");
    navigate("/");
  };

  useClickOutside(menuRef, () => {
    setIsMenuOpened(false);
  });

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
        <div className="navbar--content animate" ref={menuRef}>
          <div className="navbar--email">{email}</div>
          <Button
            name="log out"
            className="btn-primary-style"
            onClick={handleLogout}
          />
        </div>
      )}
    </div>
  );
};

type Props = {
  onClick?: () => void;
};

export default Avatar;
