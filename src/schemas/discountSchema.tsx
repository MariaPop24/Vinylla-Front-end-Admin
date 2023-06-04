import * as yup from "yup";

const discountSchema = yup.object().shape({
  code: yup
    .string()
    .required("required")
    .trim()
    .strict(true)
    .min(5, "code must be at least 5 characters")
    .max(10, "code can't exceed 10 characters")
    .matches(/^[a-zA-Z0-9]+$/, "code must contain only numbers and letters"),
  value: yup
    .number()
    .required("value is required")
    .positive("value must be a positive number")
    .min(1, "value must be at least 1")
    .max(100, "value can't exceed 100"),
  startDate: yup.date().required("required"),
  endDate: yup.date().required("required"),
  users: yup.array().of(yup.string()).default([]),
  createdAt: yup.date().default(() => new Date()),
});

export default discountSchema;
