import React, { useState } from "react";
import "./SignupPage.scss";
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
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
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
        <div>
          <FormattedMessage id="pages.signup.title" />
        </div>
        <form onSubmit={handleSubmit}>
          <span style={{ position: "relative" }}>
            <TextInput
              inputClassName={`signup-field ${
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
              <p className="signup-page--error">{errors.firstName}</p>
            )}
          </span>
          <span style={{ position: "relative" }}>
            <TextInput
              inputClassName={`signup-field ${
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
              <p className="signup-page--error">{errors.lastName}</p>
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
          </span>
          <span style={{ position: "relative" }}>
            <TextInput
              inputClassName={`signup-field ${
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
              <p className="signup-page--error">{errors.confirmPassword}</p>
            )}
          </span>
          {isLoading ? (
            <BeatLoader />
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
