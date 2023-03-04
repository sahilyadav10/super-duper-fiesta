import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import InputField from "../inputField/InputField";
import Select from "../inputField/Select";
import CircularLoader from "../loader/CircularLoader";
import { Form } from "./OnboardJourney";

type Props = {
  isLoading: boolean;
  formData: Form;
  countries: {
    isLoading: boolean;
    payload: { label: string; value: string }[];
  };
  states: { isLoading: boolean; payload: { label: string; value: string }[] };
  hasStates: boolean;
  handleFormInput: (
    arg:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

export default function AddAddress({
  isLoading,
  formData,
  countries,
  states,
  hasStates,
  handleFormInput,
}: Props) {
  return (
    <>
      <div className="flex flex-col my-3">
        <Select
          label="Country"
          id="country"
          required={true}
          isLoading={countries.isLoading}
          options={countries.payload}
          value={formData.country}
          handleChange={handleFormInput}
        />
        {hasStates && (
          <Select
            label="State"
            id="state"
            required={false}
            isLoading={states.isLoading}
            options={states.payload}
            value={formData.state}
            handleChange={handleFormInput}
          />
        )}
        <InputField
          label="City"
          placeholder="City"
          required={true}
          state={formData.city}
          hasValidation={false}
          type="text"
          id="city"
          handleChange={handleFormInput}
        />
        <InputField
          label="Address Line 1"
          placeholder="Address Line 1"
          required={true}
          state={formData.address1}
          hasValidation={false}
          type="text"
          id="address1"
          handleChange={handleFormInput}
        />
        <InputField
          label="Address Line 2"
          placeholder="Address Line 2"
          required={false}
          state={formData.address2}
          hasValidation={false}
          type="text"
          id="address2"
          handleChange={handleFormInput}
        />
        <InputField
          label="Postal Code"
          placeholder="Postal Code"
          required={true}
          state={formData.postalCode}
          hasValidation={false}
          type="text"
          id="postalCode"
          handleChange={handleFormInput}
        />
        <div className="py-2">
          {isLoading ? (
            <PrimaryButton
              disabled={
                !formData.city ||
                !formData.address1 ||
                !formData.postalCode ||
                !formData.country
              }
              type="button"
            >
              <div className="flex justify-center">
                <CircularLoader />
              </div>
            </PrimaryButton>
          ) : (
            <PrimaryButton
              disabled={
                !formData.city ||
                !formData.address1 ||
                !formData.postalCode ||
                !formData.country
              }
              type="submit"
              label="Submit"
              // onClick={handleNext}
            >
              Submit
            </PrimaryButton>
          )}
        </div>
      </div>
    </>
  );
}
