import React, { useState } from "react";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import validateEmail from "../../utils/validateEmail";
import ValidationComponent from "./ValidationComponent";

type Props = {
  label: string;
  required: boolean;
  state: string;
  type: "email" | "password";
  id: string;
  handleChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  label,
  required,
  state,
  type,
  id,

  handleChange,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleValidation = () => {
    if (type === "email") {
      if (!state) {
        setIsValid(true);
      }
      if (!validateEmail(state) && state) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-start">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
        <span className={`text-red-500 ${!required && "hidden"}`}>*</span>
      </label>

      <div className="relative pb-4">
        {type === "password" && (
          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleVisibility}
          >
            {isVisible ? (
              <VisibilityOutlinedIcon />
            ) : (
              <VisibilityOffOutlinedIcon />
            )}
          </div>
        )}
        <input
          value={state}
          onChange={handleChange}
          type={type === "email" ? "text" : isVisible ? "text" : "password"}
          onBlur={handleValidation}
          id={id}
          placeholder={`Enter your ${label}`}
          className="px-2 py-2 w-full transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        {!isValid && state && <ValidationComponent type={type} />}
      </div>
    </div>
  );
}
