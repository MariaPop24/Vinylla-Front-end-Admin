import React from "react";
import { InputType } from "../../../enums/InputType";
import "./TextInput.scss";

const TextInput = ({
  label,
  labelClassName,
  inputClassName,
  placeholder,
  type,
  onChange,
  onBlur,
  htmlFor,
  id,
  name,
  value,
}: Props) => {
  return (
    <div className="text-input-container">
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        onChange={onChange}
        onBlur={onBlur}
      />
      {label && (
        <label className={labelClassName} htmlFor={htmlFor}>
          {label}
        </label>
      )}
    </div>
  );
};

type Props = {
  label?: JSX.Element;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  type?: InputType;
  onChange?: any;
  onBlur?: any;
  htmlFor?: string;
  id?: string;
  name?: string;
  value?: string;
};

export default TextInput;
