import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const signupSchema = yup.object().shape({
  firstName: yup.string().trim().required("required"),
  lastName: yup.string().trim().required("required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "stronger password required" })
    .required("required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords must match")
    .required("required"),
});

export default signupSchema;
