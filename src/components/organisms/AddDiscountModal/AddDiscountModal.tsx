import React, { useState } from "react";
import "./AddDiscountModal.scss";
import Modal from "../Modal/Modal";
import { DiscountInterface } from "../../../interfaces/DiscountInterface";
import { useFormik } from "formik";
import discountSchema from "../../../schemas/discountSchema";
import Button from "../../atoms/Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextInput from "../../atoms/TextInput/TextInput";
import { InputType } from "../../../enums/InputType";
import { ButtonType } from "../../../enums/ButtonType";
import { FormattedMessage } from "react-intl";
import axios from "axios";

let initialValues: DiscountInterface = {
  code: "",
  value: 0,
  startDate: new Date(),
  endDate: new Date(),
};

const AddDiscountModal = ({
  setIsModalDisplayed,
  fetchDiscounts,
  defaultValues,
}: {
  setIsModalDisplayed: any;
  fetchDiscounts: any;
  defaultValues?: any;
}) => {
  const [startDate, setStartDate] = useState(
    defaultValues && defaultValues.startDate
      ? new Date(defaultValues.startDate)
      : new Date()
  );
  const [endDate, setEndDate] = useState(
    defaultValues && defaultValues.endDate
      ? new Date(defaultValues.endDate)
      : new Date()
  );

  const onSubmit = async () => {
    try {
      if (defaultValues) {
        const response = await axios.put(
          `http://localhost:8000/api/discounts/editDiscount/${defaultValues._id}`,
          { ...values }
        );
      } else {
        const response = await axios.post(
          "http://localhost:8000/api/discounts/postDiscount",
          { ...values }
        );
      }

      setIsModalDisplayed(false);
      fetchDiscounts();
    } catch (error) {}
  };

  if (defaultValues) {
    initialValues = { ...defaultValues };
  } else {
    initialValues = {
      code: "",
      value: 0,
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik<DiscountInterface>({
    initialValues,
    validationSchema: discountSchema,
    onSubmit,
  });

  const onSelectStartDate = (val: Date) => {
    setStartDate(val);
    setFieldValue("startDate", val);
  };

  const onSelectEndDate = (val: Date) => {
    setEndDate(val);
    setFieldValue("endDate", val);
  };
  return (
    <Modal setIsModalDisplayed={setIsModalDisplayed}>
      <div className="add-discount--container">
        <div className="add-discount--header">
          <p>
            {defaultValues ? "edit discount details" : "add a new discount"}
          </p>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/CloseIcon.png")}
            onClick={() => setIsModalDisplayed(false)}
          />
        </div>
        <form className="add-discount--content" onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <span style={{ position: "relative", width: "100%" }}>
              <TextInput
                inputClassName={`login-field ${
                  errors.code && touched.code ? "input-error" : ""
                }`}
                value={values.code}
                type={InputType.TEXT}
                placeholder="code"
                name="code"
                id="code"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.code && touched.code && (
                <p className="login-page--error">{errors.code}</p>
              )}
            </span>
            <span style={{ position: "relative", width: "100%" }}>
              <TextInput
                inputClassName={`login-field ${
                  errors.value && touched.value ? "input-error" : ""
                }`}
                value={values.value}
                type={InputType.NUMBER}
                placeholder="value"
                name="value"
                id="value"
                onChange={handleChange}
                onBlur={handleBlur}
                min={1}
                max={100}
              />
              {errors.value && touched.value && (
                <p className="login-page--error">{errors.value}</p>
              )}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <span style={{ position: "relative", width: "100%" }}>
              <DatePicker
                className={`login-field ${
                  errors.startDate && touched.startDate ? "input-error" : ""
                }`}
                selected={startDate}
                onChange={(value: Date) => onSelectStartDate(value)}
              />
              {errors.startDate && touched.startDate && (
                <p className="login-page--error">{errors.startDate}</p>
              )}
            </span>
            <span style={{ position: "relative", width: "100%" }}>
              <DatePicker
                className={`login-field ${
                  errors.startDate && touched.startDate ? "input-error" : ""
                }`}
                selected={endDate}
                onChange={(value: Date) => onSelectEndDate(value)}
                minDate={startDate}
              />
              {errors.startDate && touched.startDate && (
                <p className="login-page--error">{errors.startDate}</p>
              )}
            </span>
          </div>
          <Button
            style={{ height: "4rem", width: "40%", alignSelf: "center" }}
            type={ButtonType.Submit}
            name={<FormattedMessage id="pages.signup.button" />}
            className="btn-secondary-style"
          />
        </form>
      </div>
    </Modal>
  );
};

export default AddDiscountModal;
