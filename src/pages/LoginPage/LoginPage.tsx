import React from "react";
import "./LoginPage.scss";
import { FormattedMessage } from "react-intl";

const LoginPage = () => {
  return (
    <div className="landing-page--container">
      <div className="landing-page--content fadeIn">
        <div>
          <FormattedMessage id="pages.login.title" />
        </div>
        <form></form>
      </div>
    </div>
  );
};

export default LoginPage;
