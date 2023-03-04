import { ArrowBackRounded, Done } from "@mui/icons-material";
import React from "react";

type Props = {
  steps: { title: string; subTitle: string }[];
  activePage: number;
  handleBackNavigation: () => void;
  children: JSX.Element;
};

export default function JourneyLayout({
  steps,
  activePage,
  handleBackNavigation,
  children,
}: Props) {
  return (
    <div className="flex flex-col space-y-32">
      <section className="p-5 flex items-center justify-center ">
        <div
          className="absolute left-5 cursor-pointer"
          onClick={() => handleBackNavigation()}
        >
          <ArrowBackRounded />
        </div>
        {steps.map((step, index) => {
          const isActive = index === activePage;
          return (
            <>
              <div
                className={`flex flex-col items-center justify-center space-y-2 ${
                  !isActive && index >= activePage ? "opacity-40" : null
                }`}
              >
                <div
                  className={`relative rounded-full ${
                    index < activePage ? "bg-blue-500" : "bg-gray-100"
                  }  p-4 `}
                >
                  {index < activePage ? (
                    <span className="absolute top-0.5 left-1">
                      <Done style={{ color: "white" }} />
                    </span>
                  ) : (
                    <span className="absolute top-1 left-3">{index + 1}</span>
                  )}
                </div>
                <div className="text-sm ">{step.title}</div>
              </div>
              {steps.length - 1 > index && (
                <span className="h-px bg-gray-400 w-10"></span>
              )}
            </>
          );
        })}
      </section>
      <section className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-3xl">{steps[activePage].title}</h1>
        <h2 className="text-sm text-gray-500">{steps[activePage].subTitle}</h2>
        {children}
      </section>
    </div>
  );
}
