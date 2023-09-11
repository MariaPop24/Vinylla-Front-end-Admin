import React, { useState } from "react";
import "./AddProductPage.scss";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";
import TextInput from "../../components/atoms/TextInput/TextInput";
import Button from "../../components/atoms/Button/Button";
import { ButtonType } from "../../enums/ButtonType";
import { InputType } from "../../enums/InputType";

interface Detail {
  label: string;
  value: string;
}

let initialValues = {
  title: "",
  artist: "",
  images: [""],
  releaseDate: new Date(),
  price: 0,
  genre: "",
  songs: [
    {
      title: "",
      length: {
        minutes: 0,
        seconds: 0,
      },
    },
  ],
  description: "",
  details: [
    {
      label: "",
      value: "",
    },
  ],
  awards: [],
  stock: {
    small: 0,
    medium: 0,
    large: 0,
  },
  reviews: [],
};

const AddProductPage = () => {
  const [inputs, setInputs] = useState([
    { song: "", minutes: "", seconds: "" },
  ]);
  const [details, setDetails] = useState<Detail[]>([{ label: "", value: "" }]);
  const [images, setImages] = useState([{ link: "" }]);
  const [awards, setAwards] = useState([{ award: "" }]);

  const handleAddInput = () => {
    const newInputs = [...inputs];
    newInputs.push({ song: "", minutes: "", seconds: "" });
    setInputs(newInputs);
  };

  const handleAddDetailsInput = () => {
    const newInputs = [...details];
    newInputs.push({ label: "", value: "" });
    setDetails(newInputs);
  };
  const handleAddImagesInput = () => {
    const newInputs = [...images];
    newInputs.push({ link: "" });
    setImages(newInputs);
  };
  const handleAddAwardsInput = () => {
    const newInputs = [...awards];
    newInputs.push({ award: "" });
    setAwards(newInputs);
  };
  const handleRemoveInput = (index: any) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };
  const handleRemoveDetailsInput = (index: any) => {
    const newInputs = [...details];
    newInputs.splice(index, 1);
    setDetails(newInputs);
  };
  const handleRemoveImagesInput = (index: any) => {
    const newInputs = [...images];
    newInputs.splice(index, 1);
    setImages(newInputs);
  };
  const handleRemoveAwardsInput = (index: any) => {
    const newInputs = [...awards];
    newInputs.splice(index, 1);
    setAwards(newInputs);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    console.log(inputs);
  };

  const handleSongsChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index] = {
        ...updatedInputs[index],
        [name]:
          name === "minutes" || name === "seconds"
            ? parseInt(value, 10)
            : value,
      };
      return updatedInputs;
    });
  };

  const handleDetailsChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = { ...updatedDetails[index], [name]: value };
      return updatedDetails;
    });
  };

  const handleImagesChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;

    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = { link: value }; // Update the specific object
      return updatedImages;
    });
  };
  const handleAwardsChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;

    setAwards((prevAwards) => {
      const updatedAwards = [...prevAwards];
      updatedAwards[index] = { award: value }; // Update the specific object
      return updatedAwards;
    });
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
      <div className="add-product--section-text">track list</div>
      <form onSubmit={handleSubmit}>
        {inputs.map((input: any, index: number) => (
          <div key={index}>
            <div className="add-product--field-song clasa1">
              <span className="add-product--label-song">song name*: </span>
              <TextInput
                name="song"
                inputClassName="input-primary-style add-product--input"
                type={InputType.TEXT}
                value={input.song}
                onChange={(e: any) => handleSongsChange(index, e)}
              />
              <span className="add-product--label-song">minutes*: </span>
              <TextInput
                name="minutes"
                inputClassName="input-primary-style add-product--input"
                type={InputType.NUMBER}
                value={input.minutes}
                onChange={(e: any) => handleSongsChange(index, e)}
              />
              <span className="add-product--label-song">seconds*: </span>
              <TextInput
                name="seconds"
                inputClassName="input-primary-style add-product--input"
                type={InputType.NUMBER}
                value={input.seconds}
                onChange={(e: any) => handleSongsChange(index, e)}
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
                name="add song"
                onClick={handleAddInput}
              />
            )}
          </div>
        ))}
      </form>
      <div className="add-product--section-text">presentation images</div>
      {images.map((input: any, index: number) => (
        <div key={index}>
          <div className="add-product--field-song clasa1">
            <span className="add-product--label-song">link*: </span>
            <TextInput
              inputClassName="input-primary-style add-product--input"
              type={InputType.TEXT}
              value={input.link}
              onChange={(e: any) => handleImagesChange(index, e)}
            />

            {index !== images.length - 1 && (
              <a
                className="add-product--link"
                onClick={() => handleRemoveImagesInput(index)}
              >
                remove
              </a>
            )}
          </div>

          {index === images.length - 1 && (
            <Button
              className="clasa1 btn-secondary-style "
              iconClassName="icon"
              hasIconLeft={true}
              iconLeft={require("../../assets/icons/PlusIcon.png")}
              name="add image"
              onClick={handleAddImagesInput}
            />
          )}
        </div>
      ))}
      <div className="add-product--section-text">
        details (label, format, etc)
      </div>
      {details.map((input: any, index: number) => (
        <div key={index}>
          <div className="add-product--field-song clasa1">
            <span className="add-product--label-song">label*: </span>
            <TextInput
              name="label"
              inputClassName="input-primary-style add-product--input"
              type={InputType.TEXT}
              value={input.label}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleDetailsChange(index, e)
              }
            />
            <span className="add-product--label-song">value*: </span>
            <TextInput
              name="value"
              inputClassName="input-primary-style add-product--input"
              type={InputType.TEXT}
              value={input.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleDetailsChange(index, e)
              }
            />

            {index !== details.length - 1 && (
              <a
                className="add-product--link"
                onClick={() => handleRemoveDetailsInput(index)}
              >
                remove
              </a>
            )}
          </div>

          {index === details.length - 1 && (
            <Button
              className="clasa1 btn-secondary-style "
              iconClassName="icon"
              hasIconLeft={true}
              iconLeft={require("../../assets/icons/PlusIcon.png")}
              name="add item"
              onClick={handleAddDetailsInput}
            />
          )}
        </div>
      ))}
      <div className="add-product--section-text">awards</div>
      {awards.map((input: any, index: number) => (
        <div key={index}>
          <div className="add-product--field-song clasa1">
            <span className="add-product--label-song">award name: </span>
            <TextInput
              inputClassName="input-primary-style add-product--input"
              type={InputType.TEXT}
              value={input.award}
              onChange={(e: any) => handleAwardsChange(index, e)}
            />

            {index !== awards.length - 1 && (
              <a
                className="add-product--link"
                onClick={() => handleRemoveAwardsInput(index)}
              >
                remove
              </a>
            )}
          </div>

          {index === awards.length - 1 && (
            <Button
              className="clasa1 btn-secondary-style "
              iconClassName="icon"
              hasIconLeft={true}
              iconLeft={require("../../assets/icons/PlusIcon.png")}
              name="add award"
              onClick={handleAddAwardsInput}
            />
          )}
        </div>
      ))}
      <div className="add-product--buttons-container">
        <Button
          type={ButtonType.Button}
          name="back"
          className="btn-secondary-style"
        />
        <Button
          type={ButtonType.Submit}
          name="add product"
          className="btn-primary-style clasa2"
        />
      </div>
    </div>
  );
};

export default AddProductPage;
