import React from "react";
import "./App.scss";
import { I18nProvider, LOCALES } from "./i18n";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <I18nProvider locale={LOCALES.ENGLISH}>
        <div className="App">
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </I18nProvider>
    </BrowserRouter>
  );
};

export default App;
