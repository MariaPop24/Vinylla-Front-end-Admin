import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useFormik } from "formik";
import { SignupInterface } from "../../interfaces/SignupInterface";
import signupSchema from "../../schemas/signupSchema";
import TextInput from "../../components/atoms/TextInput/TextInput";
import { InputType } from "../../enums/InputType";
import { ButtonType } from "../../enums/ButtonType";
import Button from "../../components/atoms/Button/Button";
import { BeatLoader } from "react-spinners";
import axios from "axios";

const initialValues: SignupInterface = {
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/users/postAdmin",
        { ...values }
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<SignupInterface>({
      initialValues,
      validationSchema: signupSchema,
      onSubmit,
    });
  return (
    <div className="landing-page--container">
      <div className="landing-page--content fadeIn">
        <div className="login-page--title">
          <FormattedMessage id="pages.signup.title" />
        </div>
        <form onSubmit={handleSubmit} className="login-page--form">
          <span style={{ position: "relative" }}>
            <TextInput
              inputClassName={`login-field ${
                errors.firstName && touched.firstName ? "input-error" : ""
              }`}
              placeholder="first name"
              name="firstName"
              id="firstName"
              type={InputType.TEXT}
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName && (
              <p className="login-page--error">{errors.firstName}</p>
            )}
          </span>
          <span style={{ position: "relative" }}>
            <TextInput
              inputClassName={`login-field ${
                errors.lastName && touched.lastName ? "input-error" : ""
              }`}
              placeholder="last name"
              name="lastName"
              id="lastName"
              type={InputType.TEXT}
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName && (
              <p className="login-page--error">{errors.lastName}</p>
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
          <span style={{ position: "relative" }}>
            <TextInput
              inputClassName={`login-field ${
                errors.confirmPassword && touched.confirmPassword
                  ? "input-error"
                  : ""
              }`}
              placeholder="confirm password"
              name="confirmPassword"
              id="confirmPassword"
              type={InputType.PASSWORD}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="login-page--error">{errors.confirmPassword}</p>
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
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
