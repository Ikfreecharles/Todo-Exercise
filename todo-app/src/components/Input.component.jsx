import React from "react";
import "./Input.style.css";

export const InputComponent = ({
  type,
  name,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder ? placeholder : "Add your todo"}
    />
  );
};
