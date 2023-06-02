import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("required"),
  password: yup.string().required("required"),
});

export default loginSchema;
