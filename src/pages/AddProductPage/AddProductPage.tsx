import React, { useState } from "react";
import "./AddProductPage.scss";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";

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
