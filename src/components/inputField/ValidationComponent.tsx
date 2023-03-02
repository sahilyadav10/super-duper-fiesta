import React from "react";
import validateEmail from "../../utils/validateEmail";

type Props = {
  type: "email" | "password";
};

export default function ValidationComponent({ type }: Props) {
  if (type === "password") {
    return (
      <div className="flex flex-col w-full pr-1 my-3 space-y-1">
        <div className="flex pr-1 my-3 space-x-1">
          <div className="p-0.5 bg-red-400 flex-1 rounded-xl"></div>
          <div className="p-0.5 bg-red-400 flex-1 rounded-xl"></div>
          <div className="p-0.5 bg-red-400 flex-1 rounded-xl"></div>
          <div className="p-0.5 bg-red-400 flex-1 rounded-xl"></div>
        </div>

        <p className="text-start text-xs font-medium text-gray-400">
          Password is weak (Add another word or two. Uncommon words are better.)
        </p>
      </div>
    );
  } else if (type === "email") {
    return (
      <p className="absolute bottom-0 text-start text-xs font-medium text-gray-400">
        Invalid Email
      </p>
    );
  }

  return <></>;
}
