import { useState } from "react";
import { BsEyeFill, BsEyeSlash } from "../../icons";
export const InputPass = ({
  title,
  inputClass,
  inputPlaceHolder,
  inputValue,
  inputFunc,
  inputName,
}) => {
  const [visibility, setVisibility] = useState(false);
  const changeVisibility = () => setVisibility((prevState) => !prevState);
  return (
    <label>
      <span>{title}</span>
      <div className="relative">
        <input
          name={inputName}
          className={inputClass}
          type={visibility ? "text" : "password"}
          placeholder={inputPlaceHolder}
          value={inputValue}
          onChange={inputFunc}
        />
        {visibility ? (
          <BsEyeSlash
            className="cursor-ptr absolute pass-toggle"
            onClick={changeVisibility}
          />
        ) : (
          <BsEyeFill
            className="cursor-ptr absolute pass-toggle"
            onClick={changeVisibility}
          />
        )}
      </div>
    </label>
  );
};
