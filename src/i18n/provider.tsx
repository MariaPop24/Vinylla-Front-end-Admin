import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./locales";
import messages from "./messages";

const Provider = ({ children, locale = LOCALES.ENGLISH }: Props) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

type Props = {
  children?: any;
  locale?: any;
};

export default Provider;
