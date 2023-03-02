import React from "react";
import validateEmail from "../../utils/validateEmail";

type Props = {
  type: "email" | "password";
  strength: number | undefined;
};

export default function strengthComponent({ type, strength }: Props) {
  if (type === "password") {
    return (
      <div className="flex flex-col w-full pr-1 my-0.5 space-y-0.1">
        <div className="flex pr-1 my-3 space-x-1">
          {[...Array(4)].map((s, index) => {
            if ((strength === 1 || strength === 2) && strength >= index + 1) {
              return <div className="p-0.5 bg-red-400 flex-1 rounded-xl"></div>;
            } else if (
              (strength === 3 || strength === 4) &&
              strength >= index + 1
            ) {
              return (
                <div className="p-0.5 bg-green-400 flex-1 rounded-xl"></div>
              );
            }
            return <div className="p-0.5 bg-gray-400 flex-1 rounded-xl"></div>;
          })}
        </div>
        {strength <= 2 && (
          <p className="text-start text-xs font-medium text-gray-400">
            Password is weak (Add another word or two. Uncommon words are
            better.)
          </p>
        )}
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
