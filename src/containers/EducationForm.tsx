import type { MutableRefObject } from "react";
import Dropdown from "~/components/Dropdown";
import { Mapping } from "~/constants/mapping";
import type { InputType } from "~/types/input";

type PropType = {
  formRef: MutableRefObject<InputType>;
};

const EducationForm = ({ formRef }: PropType) => {
  const updateEducation = (edu: string) => {
    formRef.current.education = Mapping.education[edu] ?? 0;
  };

  return (
    <>
      <h2
        tabIndex={0}
        role="heading"
        aria-label="profile information"
        className="mt-12 text-3xl font-bold text-gray-800 focus:outline-none"
      >
        Education info
      </h2>
      <p
        role="contentinfo"
        className=" focus:outline-nonetext-sm mt-4 font-light leading-tight text-gray-600"
      >
        Fill your details in the below fields to get started. Don&apos;t worry,
        your data will not leave this browser.
      </p>
      <h2
        role="heading"
        aria-label="enter Personal data"
        className="mt-10 text-xl font-semibold leading-7 text-gray-800"
      >
        Education data
      </h2>
      <p className="mt-0.5 text-sm font-light leading-none text-gray-600">
        Your highest educational qualification
      </p>
      <div className="mt-8 items-center md:flex">
        <div className="mt-8 flex flex-col md:ml-12 md:mt-0">
          <label className="mb-3 text-sm leading-none text-gray-800">
            Education
          </label>
          <Dropdown
            options={Object.keys(Mapping.education)}
            setVal={updateEducation}
          />
        </div>
      </div>
      {/* <button
        role="button"
        aria-label="Next step"
        className="mt-7 flex items-center justify-center rounded border border-gray-400 bg-white px-7 py-4 hover:bg-gray-100 focus:outline-none focus:ring-2  focus:ring-gray-700 focus:ring-offset-2 md:mt-14"
      >
        <span className="text-center text-sm font-medium capitalize text-gray-800">
          Next Step
        </span>
        <svg
          className="ml-3 mt-1"
          width={12}
          height={8}
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
        </svg>
      </button> */}
    </>
  );
};

export default EducationForm;
