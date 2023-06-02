import React from "react";
import { FormattedMessage } from "react-intl";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <>
      <div className="not-found-container">
        <div className="not-found-text-container animate">
          <div className="not-found-title">
            <FormattedMessage id="pages.notFoundPage.title" />
          </div>
          <div className="not-found-text">
            <FormattedMessage id="pages.notFoundPage.text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
