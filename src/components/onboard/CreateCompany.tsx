import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import InputField from "../inputField/InputField";
import Select from "../inputField/Select";
import { Form } from "./OnboardJourney";

type Props = {
  formData: Form;
  handleFormInput: (
    arg:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
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
            hasValidation={false}
            type="text"
            id="firstName"
            handleChange={handleFormInput}
          />
          <InputField
            label=""
            placeholder={"Last Name"}
            state={formData.lastName}
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
          hasValidation={false}
          type="text"
          id="companyName"
          handleChange={handleFormInput}
        />
        <Select
          label="Default Currency"
          id="defaultCurrency"
          required={true}
          options={[
            { value: "usd", label: "USD" },
            { value: "cad", label: "CAD" },
            { value: "eur", label: "EUR" },
            { value: "inr", label: "INR" },
          ]}
          value={formData.defaultCurrency}
          handleChange={handleFormInput}
        />

        <div className="py-2">
          <PrimaryButton
            disabled={
              !formData.firstName || !formData.lastName || !formData.companyName
            }
            type="submit"
            label="Continue"
            onClick={handleNext}
          />
        </div>
      </div>
    </>
  );
}
