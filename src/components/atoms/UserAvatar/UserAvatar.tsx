import React from "react";

const UserAvatar = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  const userName = firstName + " " + lastName;
  const names = userName.split(" ");
  const firstLetters = names[0][0] + names[1][0];
  return (
    <div className="avatar--container">
      {firstLetters && firstLetters.toUpperCase()}
    </div>
  );
};

export default UserAvatar;
