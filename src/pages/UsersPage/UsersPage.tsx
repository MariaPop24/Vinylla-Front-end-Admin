import React, { useEffect, useState } from "react";
import "./UsersPage.scss";
import Navbar from "../../components/organisms/Navbar/Navbar";
import axios from "axios";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";
import Button from "../../components/atoms/Button/Button";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import UserCard from "../../components/molecules/UserCard/UserCard";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("usersData");
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<any>();

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
  };

  const handleSearchRequest = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/users/searchUser/${searchText}`
      );
      const users = response.data.users;
      setUsers(users);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/users/getRegisteredUsers"
      );
      console.log(response);
      const users = response.data.users;
      setUsers(users);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchText) {
      handleSearchRequest();
    }
  }, [searchText]);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <div className="all-products--container">
        <TextBlock messageId="pages.users.title" />
        <div className="all-products--search">
          <div className="searchBox active">
            <input
              className="searchInput"
              type="text"
              name=""
              placeholder="what are you looking for?"
              onChange={handleSearch}
            />
            <Button
              className="searchButton"
              iconClassName="menu-icon"
              hasIconLeft={true}
              iconLeft={require("../../assets/icons/SearchIcon.png")}
              onClick={handleSearchRequest}
            />
          </div>
        </div>
        <div className="all-product--albums">
          {isLoading ? (
            <div className="all-products--spinner">
              <BeatLoader />
            </div>
          ) : (
            <div className="all-products--list">
              {users && users.length > 0 ? (
                users.map((item: any, index: number) => (
                  <div key={index}>
                    <UserCard item={item} fetchUsers={fetchUsers} />
                  </div>
                ))
              ) : (
                <div className="all-products--no-results">
                  <FormattedMessage id="pages.allProducts.no-results" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
