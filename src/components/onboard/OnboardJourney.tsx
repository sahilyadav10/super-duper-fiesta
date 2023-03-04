import React, { useState } from "react";
import JourneyLayout from "../layout/JourneyLayout";
import CardLayout from "../layout/CardLayout";
import AddAddress from "./AddAddress";
import CreateCompany from "./CreateCompany";

export type Form = {
  firstName: string;
  lastName: string;
  companyName: string;
  defaultCurrency: string;
  country: string;
  state: string;
  city: string;
  address1: string;
  address2: string;
  postalCode: string;
};

export default function OnboardJourney() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    defaultCurrency: "",
    country: "",
    state: "",
    city: "",
    address1: "",
    address2: "",
    postalCode: "",
  });

  const handleFormInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const input = event.target.value.trimStart();
    const field = event.target.id;

    if (field === "country") {
      setFormData((prevState) => ({
        ...prevState,
        [field]: input,
        state: "",
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [field]: input,
      }));
    }
  };

  const journey = (): JSX.Element => {
    switch (page) {
      case 0:
        return (
          <CreateCompany
            formData={formData}
            handleFormInput={handleFormInput}
            handleNext={() => setPage(1)}
          />
        );
      case 1:
        return (
          <AddAddress
            formData={formData}
            handleFormInput={handleFormInput}
            handleNext={() => setPage(2)}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <JourneyLayout
        steps={[
          {
            title: "Create Company",
            subTitle:
              "Company details will be used in all communications on the platform.",
          },
          {
            title: "Add Address",
            subTitle:
              "Company details will be used in all communications on the platform.",
          },
        ]}
        activePage={page}
        handleBackNavigation={() => {
          setPage(0);
        }}
      >
        <section className="flex items-center justify-center max-w-md w-full">
          <CardLayout>{journey()}</CardLayout>
        </section>
      </JourneyLayout>
    </>
  );
}
