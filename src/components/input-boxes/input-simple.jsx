import React from "react";

export const InputSimple = ({
  title,
  inputClass,
  inputType,
  inputPlaceholder,
  inputValue,
  inputFunc,
  inputName,
}) => {
  return (
    <label className="flex flex-col">
      <span>{title}</span>
      <input
        name={inputName}
        className={inputClass}
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputFunc}
      />
    </label>
  );
};
