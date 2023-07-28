"use client";

import Dropdown from "~/components/Dropdown";
import Slider from "~/components/Slider";
import type { MutableRefObject } from "react";
import type { InputType } from "~/types/input";
import { Mapping } from "~/constants/mapping";

type PropType = {
  formRef: MutableRefObject<InputType>;
};

const GeneralForm = ({ formRef }: PropType) => {
  const updateAge = (num: number) => {
    formRef.current.age = num;
  };

  const updateGender = (gen: string) => {
    formRef.current.gender = Mapping.gender[gen] ?? 0;
  };

  const updateRace = (rac: string) => {
    formRef.current.race = Mapping.race[rac] ?? 0;
  };

  const updateCountry = (coun: string) => {
    formRef.current.country = Mapping.country[coun] ?? 0;
  };

  return (
    <>
      <h2
        tabIndex={0}
        role="heading"
        aria-label="profile information"
        className="mt-12 text-3xl font-bold text-gray-800 focus:outline-none"
      >
        General info
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
        Personal data
      </h2>
      <p className="mt-0.5 text-sm font-light leading-none text-gray-600">
        Your age, gender, country and race
      </p>
      <div className="mt-8 items-center md:flex">
        <div className="flex flex-col">
          <label className="mb-3 text-sm leading-none text-gray-800">Age</label>
          <Slider name="age" setValue={updateAge} min={1} max={100} />
        </div>
        <div className="mt-8 flex flex-col md:ml-12 md:mt-0">
          <label className="mb-3 text-sm leading-none text-gray-800">
            Gender
          </label>
          <Dropdown
            options={Object.keys(Mapping.gender)}
            setVal={updateGender}
          />
        </div>
      </div>
      <div className="mt-12 items-center md:flex">
        <div className="flex flex-col">
          <label className="mb-3 text-sm leading-none text-gray-800">
            Country
          </label>
          <Dropdown
            options={Object.keys(Mapping.country)}
            setVal={updateCountry}
          />
        </div>
        <div className="mt-8 flex flex-col md:ml-12 md:mt-0">
          <label className="mb-3 text-sm leading-none text-gray-800">
            Race
          </label>
          <Dropdown options={Object.keys(Mapping.race)} setVal={updateRace} />
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

export default GeneralForm;
