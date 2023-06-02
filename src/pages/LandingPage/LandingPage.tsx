import React from "react";
import "./LandingPage.scss";
import { FormattedMessage } from "react-intl";
import Button from "../../components/atoms/Button/Button";
import Or from "../../components/molecules/Or/Or";

const LandingPage = () => {
  return (
    <div className="landing-page--container">
      <div className="landing-page--content fadeIn">
        <FormattedMessage id="pages.landingPage.title" />
        <div className="landing-page--buttons">
          <Button
            className="btn-primary-style"
            name={<FormattedMessage id="pages.landingPage.signup-btn" />}
          />
          <Or />
          <Button
            className="btn-primary-style"
            name={<FormattedMessage id="pages.landingPage.login-btn" />}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
