import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import InputField from "../inputField/InputField";
import { Form } from "./OnboardJourney";

type Props = {
  formData: Form;
  handleFormInput: (arg: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
};

export default function CreateCompany({
  formData,
  handleFormInput,
  handleNext,
}: Props) {
  return (
    <>
      <div className="flex flex-col my-3">
        <div className="flex items-end space-x-4">
          <InputField
            label="Personal Details"
            placeholder={"First Name"}
            required={true}
            state={formData.firstName}
            isValid={false}
            hasValidation={false}
            type="text"
            id="firstName"
            handleChange={handleFormInput}
          />
          <InputField
            label=""
            placeholder={"Last Name"}
            state={formData.lastName}
            isValid={false}
            hasValidation={false}
            type="text"
            id="lastName"
            handleChange={handleFormInput}
          />
        </div>
        <InputField
          label="Company Name"
          placeholder={"Enter Company Name"}
          required={true}
          state={formData.companyName}
          isValid={false}
          hasValidation={false}
          type="text"
          id="companyName"
          handleChange={handleFormInput}
        />
        <label htmlFor="countries" className="text-sm font-semibold">
          Default Currency
        </label>
        <select
          id="countries"
          className="px-2 py-2 w-full transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <option value="usd" selected>
            USD
          </option>
          <option value="cad">CAD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <div className="py-2">
          <PrimaryButton
            disabled={
              !formData.firstName || !formData.lastName || !formData.companyName
            }
            type="button"
            label="Continue"
            onClick={handleNext}
          />
        </div>
      </div>
    </>
  );
}
