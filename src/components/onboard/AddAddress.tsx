import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import InputField from "../inputField/InputField";
import { Form } from "./OnboardJourney";

type Props = {
  formData: Form;
  handleFormInput: (arg: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
};

export default function AddAddress({
  formData,
  handleFormInput,
  handleNext,
}: Props) {
  return (
    <>
      <div className="flex flex-col my-3">
        <InputField
          label="Country"
          required={true}
          state={""}
          isValid={false}
          hasValidation={true}
          handleValidation={() => {}}
          type="text"
          id="email"
          handleChange={handleFormInput}
        />
        <InputField
          label="State"
          required={true}
          state={""}
          isValid={false}
          hasValidation={true}
          handleValidation={() => {}}
          type="text"
          id="email"
          handleChange={handleFormInput}
        />

        <InputField
          label="City"
          placeholder="City"
          required={true}
          state={formData.city}
          isValid={false}
          hasValidation={true}
          handleValidation={() => {}}
          type="text"
          id="city"
          handleChange={handleFormInput}
        />
        <InputField
          label="Address Line 1"
          placeholder="Address Line 1"
          required={true}
          state={formData.address1}
          isValid={false}
          hasValidation={true}
          handleValidation={() => {}}
          type="text"
          id="address1"
          handleChange={handleFormInput}
        />
        <InputField
          label="Address Line 2"
          placeholder="Address Line 2"
          required={false}
          state={formData.address2}
          isValid={false}
          hasValidation={true}
          handleValidation={() => {}}
          type="text"
          id="address2"
          handleChange={handleFormInput}
        />
        <InputField
          label="Postal Code"
          placeholder="Postal Code"
          required={true}
          state={formData.postalCode}
          isValid={false}
          hasValidation={true}
          handleValidation={() => {}}
          type="text"
          id="postalCode"
          handleChange={handleFormInput}
        />
        <div className="py-2">
          <PrimaryButton
            disabled={
              !formData.city || !formData.address1 || !formData.postalCode
            }
            type="button"
            label="Submit"
          />
        </div>
      </div>
    </>
  );
}
