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

const initialValues: LoginInterface = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/users/loginUser",
        { ...values }
      );
      console.log(response);
      localStorage.setItem("usersData", JSON.stringify(response.data.user));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
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
        <div>
          <FormattedMessage id="pages.login.title" />
        </div>
        <form onSubmit={handleSubmit}>
          <span style={{ position: "relative" }}>
            <TextInput
              inputClassName={`signup-field ${
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
              <p className="signup-page--error">{errors.email}</p>
            )}
          </span>
          <span style={{ position: "relative" }}>
            <TextInput
              inputClassName={`signup-field ${
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
              <p className="signup-page--error">{errors.password}</p>
            )}
            {isLoading ? (
              <BeatLoader />
            ) : (
              <Button
                type={ButtonType.Submit}
                name={<FormattedMessage id="pages.signup.button" />}
                className="btn-primary-style"
              />
            )}
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
