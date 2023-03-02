import Image from "next/image";
import React, { useState } from "react";

import TheraIcon from "../../../public/thera_icon.webp";
import validateEmail from "../../utils/validateEmail";
import validatePassword from "../../utils/validatePassword";
import PrimaryButton from "../button/PrimaryButton";
import InputField from "../inputField/InputField";
const Login = () => {
  // const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState({ value: "", isValid: false });
  const [password, setPassword] = useState({
    value: "",
    isValid: false,
    strength: 0,
  });

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.trim();
    setEmail((prevState) => ({ ...prevState, value: input }));
  };

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setPassword((prevState) => ({ ...prevState, value: input }));
  };

  const handleValidation = (type: "email" | "password", state: string) => {
    if (type === "email") {
      if (!validateEmail(state) && state) {
        setEmail((prevState) => ({ ...prevState, isValid: false }));
      } else {
        setEmail((prevState) => ({ ...prevState, isValid: true }));
      }
    } else if (type === "password") {
      const strength = validatePassword(state);
      if (!state) {
        setPassword((prevState) => ({
          ...prevState,
          isValid: false,
          strength: 0,
        }));
      } else {
        if (strength > 2) {
          setPassword((prevState) => ({
            ...prevState,
            isValid: true,
            strength,
          }));
        } else {
          setPassword((prevState) => ({
            ...prevState,
            isValid: false,
            strength,
          }));
        }
      }
    }
  };

  return (
    <div className="p-5 text-center bg-white rounded-md shadow-md w-4/12">
      <div className="my-4 flex justify-center">
        <Image src={TheraIcon} alt="Thera Logo" width={50} height={50} />
      </div>
      <h1 className="my-4 text-md font-bold text-black">Get Started</h1>

      <div className="flex flex-col my-3">
        <a
          href="#"
          className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-black rounded-md group hover:bg-black focus:outline-none"
        >
          <span className="text-sm font-medium text-black group-hover:text-white">
            Continue with Google
          </span>
        </a>
      </div>

      <div className="flex items-center justify-center space-x-2 mb-3">
        <span className="h-px bg-gray-400 w-20"></span>
        <span className="font-normal text-black">OR</span>
        <span className="h-px bg-gray-400 w-20"></span>
      </div>

      <form action="#" className="flex flex-col space-y-1 w-full">
        <InputField
          label="Email Address"
          required={true}
          state={email.value}
          isValid={email.isValid}
          hasValidation={true}
          handleValidation={handleValidation}
          type="email"
          id="email"
          handleChange={handleEmailInput}
        />

        <InputField
          label="Password"
          required={true}
          state={password.value}
          strength={password.strength}
          isValid={password.isValid}
          hasValidation={true}
          handleValidation={handleValidation}
          type="password"
          id="password"
          handleChange={handlePasswordInput}
        />

        <div className="py-2">
          <PrimaryButton
            disabled={!email.isValid || !password.isValid}
            type="submit"
            label="Sign Up"
          />
        </div>

        <div>
          <p className="text-center text-xs font-medium text-gray-400">
            Alreay have an account?{" "}
            <span className="underline text-black cursor-pointer">Log in</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
