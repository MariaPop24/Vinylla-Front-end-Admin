import React, { useState } from "react";
import "./AddProductPage.scss";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";
import TextInput from "../../components/atoms/TextInput/TextInput";

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
      <form onSubmit={handleSubmit}>
        {inputs.map((input: any, index: number) => (
          <div key={index}>
            <input
              type="text"
              value={input.value}
              onChange={(e) => handleChange(index, e)}
            />
            {index === inputs.length - 1 && (
              <button type="button" onClick={handleAddInput}>
                Add Input
              </button>
            )}
            {index !== inputs.length - 1 && (
              <button type="button" onClick={() => handleRemoveInput(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
