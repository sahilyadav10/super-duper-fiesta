import React, { useEffect, useState } from "react";
import JourneyLayout from "../layout/JourneyLayout";
import CardLayout from "../layout/CardLayout";
import AddAddress from "./AddAddress";
import CreateCompany from "./CreateCompany";
import { useRouter } from "next/router";
import hasStates from "../../utils/hasStates";

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

const statesJSON = [
  { label: "state 1", value: "state 1" },
  { label: "state 2", value: "state 2" },
  { label: "state 3", value: "state 3" },
  { label: "state 4", value: "state 4" },
  { label: "state 5", value: "state 5" },
  { label: "state 6", value: "state 6" },
];

export default function OnboardJourney() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    defaultCurrency: "usd",
    country: "",
    state: "",
    city: "",
    address1: "",
    address2: "",
    postalCode: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    if (!Boolean(localStorage.getItem("isLoggedIn"))) {
      router.push("/");
    } else {
      setIsLoggedIn(true);
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      localStorage.removeItem("isLoggedIn");
      router.push("/");
    }, 3000);
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
            isLoading={isLoading}
            countries={countries}
            states={states}
            hasStates={hasStates(formData.country)}
            formData={formData}
            handleFormInput={handleFormInput}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      {isLoggedIn && (
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
            <CardLayout>
              <form onSubmit={handleSubmit}>{journey()}</form>
            </CardLayout>
          </section>
        </JourneyLayout>
      )}
    </>
  );
}
