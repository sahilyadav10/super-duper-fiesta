import React, { useState } from "react";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import validateEmail from "../../utils/validateEmail";
import ValidationComponent from "./ValidationComponent";
import validatePassword from "../../utils/validatePassword";

type Props =
  | {
      label: string;
      required: boolean;
      state: string;
      strength?: undefined;
      isValid: boolean;
      placeholder: string;
      hasValidation: false;
      handleValidation: (...arg: any[]) => void;
      type: "text";
      id: string;
      handleChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
    }
  | {
      label: string;
      required: boolean;
      state: string;
      strength?: undefined;
      isValid: boolean;
      placeholder: string;
      hasValidation: boolean;
      handleValidation: (arg1: "email", arg2: string) => void;
      type: "email";
      id: string;
      handleChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
    }
  | {
      label: string;
      required: boolean;
      state: string;
      strength: number;
      isValid: boolean;
      placeholder: string;
      hasValidation: boolean;
      handleValidation: (arg1: "password", arg2: string) => void;
      type: "password";
      id: string;
      handleChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
    };

export default function InputField({
  label,
  required,
  state,
  strength,
  isValid,
  placeholder,
  hasValidation = false,
  handleValidation = () => {},
  type,
  id,
  handleChange,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
        <span className={`text-red-500 ${!required && "hidden"}`}>*</span>
      </label>

      <div className="relative pb-4 w-full">
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
          type={
            type === "email" || type === "text"
              ? "text"
              : isVisible
              ? "text"
              : "password"
          }
          onBlur={() => {
            hasValidation && type !== "text"
              ? handleValidation(type, state)
              : null;
          }}
          id={id}
          placeholder={placeholder}
          className="px-2 py-2 w-full transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        {type === "password" ? (
          <>
            {strength !== 0 && (
              <ValidationComponent type={type} strength={strength} />
            )}
          </>
        ) : (
          <>
            {hasValidation && !isValid && state && (
              <ValidationComponent type={type} strength={strength} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
