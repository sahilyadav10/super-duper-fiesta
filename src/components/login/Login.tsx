import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

import TheraIcon from "../../../public/thera_icon.webp";
import validateEmail from "../../utils/validateEmail";
import validatePassword from "../../utils/validatePassword";
import PrimaryButton from "../button/PrimaryButton";
import InputField from "../inputField/InputField";
import CircularLoader from "../loader/CircularLoader";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState({ value: "", isValid: false });
  const [password, setPassword] = useState({
    value: "",
    isValid: false,
    strength: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

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
      if (state) {
        setIsLoading(true);

        setTimeout(() => {
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
          setIsLoading(false);
        }, 3000);
      }
    }
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const strength = validatePassword(password.value);
      if (strength === 4) {
        localStorage.setItem("isLoggedIn", "true");
        router.push("onboard/");
      } else {
        setIsLoading(false);
      }
    }, 3000);
  };

  const handleFormType = () => {
    setIsLogin((prevState) => !prevState);
    setEmail((prevState) => ({ ...prevState, value: "" }));
    setPassword((prevState) => ({ ...prevState, strength: 0, value: "" }));
  };

  return (
    <>
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

      <form className="flex flex-col space-y-1 w-full" onSubmit={handleLogin}>
        <InputField
          label="Email Address"
          placeholder={"Enter your Email"}
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
          placeholder={"Enter your password"}
          required={true}
          state={password.value}
          strength={password.strength}
          isValid={password.isValid}
          hasValidation={!isLogin}
          handleValidation={handleValidation}
          type="password"
          id="password"
          handleChange={handlePasswordInput}
        />

        <div className="py-2">
          {isLoading ? (
            <PrimaryButton
              disabled={!email.isValid || !password.isValid}
              type="submit"
            >
              <div className="flex justify-center">
                <CircularLoader />
              </div>
            </PrimaryButton>
          ) : (
            <>
              {isLogin ? (
                <PrimaryButton
                  disabled={!email.isValid || !password.value}
                  type="submit"
                >
                  Login
                </PrimaryButton>
              ) : (
                <PrimaryButton
                  disabled={!email.isValid || !password.isValid}
                  type="submit"
                >
                  Sign Up
                </PrimaryButton>
              )}
            </>
          )}
        </div>
        <div>
          <p className="text-center text-xs font-medium text-gray-400">
            {isLogin ? "Don't" : "Already"} have an account?{" "}
            <span
              className="underline text-black cursor-pointer"
              onClick={handleFormType}
            >
              {isLogin ? "Sign Up" : "Log in"}
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
