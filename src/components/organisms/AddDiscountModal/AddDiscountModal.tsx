import React from "react";
import "./AddDiscountModal.scss";
import Modal from "../Modal/Modal";
import { DiscountInterface } from "../../../interfaces/DiscountInterface";
import { useFormik } from "formik";
import discountSchema from "../../../schemas/discountSchema";
import Button from "../../atoms/Button/Button";

let initialValues: DiscountInterface = {
  code: "",
  value: 0,
  startDate: new Date(),
  endDate: new Date(),
};

const AddDiscountModal = ({
  setIsModalDisplayed,
}: {
  setIsModalDisplayed: any;
}) => {
  const onSubmit = async () => {
    // try {
    //   setIsLoading(true);
    //   const response = await axios.post(
    //     "http://localhost:8000/api/users/postAdmin",
    //     { ...values }
    //   );
    //   setIsLoading(false);
    // } catch (error) {
    //   setIsLoading(false);
    // }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<DiscountInterface>({
      initialValues,
      validationSchema: discountSchema,
      onSubmit,
    });

  return (
    <Modal setIsModalDisplayed={setIsModalDisplayed}>
      <div className="add-discount--container">
        <div className="add-discount--header">
          <p>add a new discount</p>
          <Button
            className="album-card--button"
            iconClassName="album-card--icons"
            hasIconOnly={true}
            icon={require("../../../assets/icons/CloseIcon.png")}
            onClick={() => setIsModalDisplayed(false)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddDiscountModal;
