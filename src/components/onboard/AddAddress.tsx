import React, { useEffect, useState } from "react";
import PrimaryButton from "../button/PrimaryButton";
import InputField from "../inputField/InputField";
import Select from "../inputField/Select";
import { Form } from "./OnboardJourney";

function hasStates(country: string): boolean {
  if (
    country === "United States" ||
    country === "Australia" ||
    country === "India"
  ) {
    return true;
  }
  return false;
}

const statesJSON = [
  { label: "state 1", value: "state 1" },
  { label: "state 2", value: "state 2" },
  { label: "state 3", value: "state 3" },
  { label: "state 4", value: "state 4" },
  { label: "state 5", value: "state 5" },
  { label: "state 6", value: "state 6" },
];

type Props = {
  formData: Form;
  handleFormInput: (
    arg:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleNext: () => void;
};

export default function AddAddress({
  formData,
  handleFormInput,
  handleNext,
}: Props) {
  const [countries, setCountries] = useState({
    isLoading: true,
    payload: [{ label: "", value: "" }],
  });
  const [states, setStates] = useState({
    hasState: false,
    isLoading: true,
    payload: [{ label: "", value: "" }],
  });

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/iso")
      .then((response) => response.json())
      .then((result) => {
        const countries = result.data.map((country: { name: string }) => ({
          label: country.name,
          value: country.name,
        }));
        setCountries({ payload: countries, isLoading: false });
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    if (hasStates(formData.country)) {
      setTimeout(() => {
        setStates({
          payload: [...statesJSON],
          hasState: true,
          isLoading: false,
        });
      }, 4000);
    } else {
      setStates({
        isLoading: true,
        payload: [{ label: "", value: "" }],
        hasState: false,
      });
    }
  }, [formData.country]);

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
        {hasStates(formData.country) && (
          <Select
            label="State"
            id="state"
            required={true}
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
