import React from "react";
import "./App.scss";
import { I18nProvider, LOCALES } from "./i18n";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import DiscountsPage from "./pages/DiscountsPage/DiscountsPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <I18nProvider locale={LOCALES.ENGLISH}>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/discounts" element={<DiscountsPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </I18nProvider>
    </BrowserRouter>
  );
};

export default App;
