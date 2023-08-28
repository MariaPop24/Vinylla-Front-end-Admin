import React from "react";
import "./LandingPage.scss";
import { FormattedMessage } from "react-intl";
import Button from "../../components/atoms/Button/Button";
import Or from "../../components/molecules/Or/Or";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="landing-page--container">
      <div className="landing-page--content fadeIn">
        <FormattedMessage id="pages.landingPage.title" />
        <div className="landing-page--buttons">
          <Button
            className="btn-primary-style"
            name={<FormattedMessage id="pages.landingPage.login-btn" />}
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
