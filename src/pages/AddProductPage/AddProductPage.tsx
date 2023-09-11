import React, { useState } from "react";
import "./AddProductPage.scss";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";
import TextInput from "../../components/atoms/TextInput/TextInput";
import Button from "../../components/atoms/Button/Button";
import { ButtonType } from "../../enums/ButtonType";
import { InputType } from "../../enums/InputType";
import { FormattedMessage } from "react-intl";

const AddProductPage = () => {
  const [inputs, setInputs] = useState([{ value: "" }]);

  const handleChange = (index: any, e: any) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    const newInputs = [...inputs];
    newInputs.push({ value: "" });
    setInputs(newInputs);
  };

  const handleRemoveInput = (index: any) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    console.log(inputs);
  };

  return (
    <div className="add-product--container">
      <TextBlock text="add new product to the store" />
      <div className="add-product--section-text">general details</div>
      <div className="add-product--field">
        <span className="add-product--label">name of the album*: </span>
        <TextInput inputClassName="input-primary-style add-product--input" />
      </div>
      <div className="add-product--field">
        <span className="add-product--label">artist name*: </span>
        <TextInput inputClassName="input-primary-style add-product--input" />
      </div>
      <div className="add-product--field">
        <span className="add-product--label">release date*: </span>
        <TextInput inputClassName="input-primary-style add-product--input" />
      </div>
      <div className="add-product--field">
        <span className="add-product--label">price (in USD)*: </span>
        <TextInput inputClassName="input-primary-style add-product--input" />
      </div>
      <div className="add-product--field">
        <span className="add-product--label">genre*: </span>
        <TextInput inputClassName="input-primary-style add-product--input" />
      </div>
      <div className="add-product--field">
        <span className="add-product--label">description*: </span>
        <textarea className="add-product--textarea" maxLength={3000}></textarea>
      </div>
      <div className="add-product--section-text">presentation images</div>
      <form onSubmit={handleSubmit}>
        {inputs.map((input: any, index: number) => (
          <div key={index}>
            <div className="add-product--field-song clasa1">
              <span className="add-product--label-song">song name*: </span>
              <TextInput
                inputClassName="input-primary-style add-product--input"
                type={InputType.TEXT}
                value={input.value}
                onChange={(e: any) => handleChange(index, e)}
              />
              <span className="add-product--label-song">minutes*: </span>
              <TextInput
                inputClassName="input-primary-style add-product--input"
                type={InputType.NUMBER}
                value={input.value}
                onChange={(e: any) => handleChange(index, e)}
              />
              <span className="add-product--label-song">seconds*: </span>
              <TextInput
                inputClassName="input-primary-style add-product--input"
                type={InputType.NUMBER}
                value={input.value}
                onChange={(e: any) => handleChange(index, e)}
              />
              {index !== inputs.length - 1 && (
                <a
                  className="add-product--link"
                  onClick={() => handleRemoveInput(index)}
                >
                  remove
                </a>
              )}
            </div>

            {index === inputs.length - 1 && (
              <Button
                className="clasa1 btn-secondary-style "
                iconClassName="icon"
                hasIconLeft={true}
                iconLeft={require("../../assets/icons/PlusIcon.png")}
                name={<FormattedMessage id="pages.allProducts.add-btn" />}
                onClick={handleAddInput}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
