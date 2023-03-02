import Image from "next/image";
import React, { useState } from "react";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import TheraIcon from "../../../public/thera_icon.webp";
import validateEmail from "../../utils/validateEmail";
import PrimaryButton from "../button/PrimaryButton";
import InputField from "../inputField/InputField";
const Login = () => {
  // const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.trim();
    setEmail(input);
  };

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setPassword(input);
  };

  return (
    <div className="flex bg-gray-100 flex-col items-center justify-center ">
      {/* {isLogin ? <LoginForm /> : <SignUpForm />} */}

      <div className="p-5 text-center bg-white rounded-md shadow-md">
        <div className="my-4 flex justify-center">
          <Image src={TheraIcon} alt="Thera Logo" width={50} height={50} />
        </div>
        <h1 className="my-4 text-md font-bold text-black">Get Started</h1>

        <div className="flex flex-col my-4">
          <a
            href="#"
            className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-black rounded-md group hover:bg-black focus:outline-none"
          >
            <span className="text-sm font-medium text-black group-hover:text-white">
              Continue with Google
            </span>
          </a>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <span className="h-px bg-gray-400 w-20"></span>
          <span className="font-normal text-black">OR</span>
          <span className="h-px bg-gray-400 w-20"></span>
        </div>

        <form action="#" className="flex flex-col space-y-1 w-full">
          <InputField
            label="Email Address"
            required={true}
            state={email}
            type="email"
            id="email"
            handleChange={handleEmailInput}
          />

          <InputField
            label="Password"
            required={true}
            state={password}
            type="password"
            id="password"
            handleChange={handlePasswordInput}
          />

          <div>
            <PrimaryButton type="submit" label="Sign Up" />
          </div>

          <div>
            <p className="text-center text-xs font-medium text-gray-400">
              Alreay have an account?{" "}
              <span className="underline text-black cursor-pointer">
                Log in
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
