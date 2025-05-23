import React, { useState } from "react";
import "./LoginPage.scss";
import { FormattedMessage } from "react-intl";
import { LoginInterface } from "../../interfaces/LoginInterface";
import axios from "axios";
import { useFormik } from "formik";
import loginSchema from "../../schemas/loginSchema";
import TextInput from "../../components/atoms/TextInput/TextInput";
import { InputType } from "../../enums/InputType";
import { BeatLoader } from "react-spinners";
import Button from "../../components/atoms/Button/Button";
import { ButtonType } from "../../enums/ButtonType";
import { useNavigate } from "react-router-dom";

const initialValues: LoginInterface = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/users/loginUser",
        { ...values }
      );
      localStorage.setItem("usersData", JSON.stringify(response.data.user));
      setIsLoading(false);
      navigate("/products");
    } catch (error) {
      setIsLoading(false);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<LoginInterface>({
      initialValues,
      validationSchema: loginSchema,
      onSubmit,
    });
  return (
    <div className="landing-page--container">
      <div className="landing-page--content fadeIn">
        <div className="login-page--title">
          <FormattedMessage id="pages.login.title" />
        </div>
        <form onSubmit={handleSubmit} className="login-page--form">
          <span style={{ position: "relative" }}>
            <TextInput
              inputClassName={`login-field ${
                errors.email && touched.email ? "input-error" : ""
              }`}
              placeholder="email"
              name="email"
              id="email"
              type={InputType.TEXT}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="login-page--error">{errors.email}</p>
            )}
          </span>
          <span style={{ position: "relative" }}>
            <TextInput
              inputClassName={`login-field ${
                errors.password && touched.password ? "input-error" : ""
              }`}
              placeholder="password"
              name="password"
              id="password"
              type={InputType.PASSWORD}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="login-page--error">{errors.password}</p>
            )}
          </span>
          {isLoading ? (
            <div className="login-page--spinner">
              <BeatLoader />
            </div>
          ) : (
            <Button
              type={ButtonType.Submit}
              name={<FormattedMessage id="pages.signup.button" />}
              className="btn-primary-style"
              style={{ width: "100.5%" }}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
