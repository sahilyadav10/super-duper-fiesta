import React from "react";

type Props = {
  label: string;
  id: string;
  required: boolean;
  options: { value: string; label: string }[];
  isLoading?: boolean;
  value: string;
  handleChange: (arg: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select({
  label,
  id,
  required,
  isLoading,
  options,
  value,
  handleChange,
}: Props) {
  return (
    <div className="flex flex-col items-start mb-3">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
        <span className={`text-red-500 ${!required && "hidden"}`}>*</span>
      </label>
      <select
        value={value}
        onChange={handleChange}
        id={id}
        className="px-2 py-2 w-full transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
      >
        {isLoading ? (
          <option value="loading" selected>
            Loading....
          </option>
        ) : (
          <>
            {options.map((option) => {
              return <option value={option.value}>{option.label}</option>;
            })}{" "}
          </>
        )}
      </select>
    </div>
  );
}
