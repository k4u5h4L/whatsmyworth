"use client";

import { useRef } from "react";
import EducationForm from "~/containers/EducationForm";
import ExperienceForm from "~/containers/ExperienceForm";
import GeneralForm from "~/containers/GeneralForm";
import Result from "~/containers/Result";
import type { InputType } from "~/types/input";

const FormsToMap = [GeneralForm, EducationForm, ExperienceForm, Result];

const initForm: InputType = {
  age: 0,
  gender: 0,
  education: 0,
  role: 0,
  yoe: 0,
  country: 0,
  race: 0,
};

function Home() {
  const formRef = useRef(initForm);

  return (
    <div>
      <div className="w-full bg-white p-10">
        <div className="items-center border-b border-gray-200 pb-6 md:flex">
          <div className="mt-4 flex items-center md:mt-0">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100">
              <p className="text-base font-medium leading-none text-gray-800">
                01
              </p>
            </div>
            <p className="ml-3 text-base font-medium leading-4 text-gray-800">
              General info
            </p>
          </div>
          <div className="mt-4 flex items-center md:ml-12 md:mt-0">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100">
              <p className="text-base font-medium leading-none text-gray-800">
                02
              </p>
            </div>
            <p className="ml-3 text-base font-medium leading-4 text-gray-800">
              Education
            </p>
          </div>
          <div className="mt-4 flex items-center md:ml-12 md:mt-0">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100">
              <p className="text-base font-medium leading-none text-gray-800">
                03
              </p>
            </div>
            <p className="ml-3 text-base font-medium leading-4 text-gray-800">
              Experience
            </p>
          </div>
          <div className="mt-4 flex items-center md:ml-12 md:mt-0">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-orange-300">
              <p className="text-base font-medium leading-none text-gray-800">
                04
              </p>
            </div>
            <p className="ml-3 text-base font-medium leading-4 text-gray-800">
              <i>Your worth...</i>
            </p>
          </div>
        </div>
        <h1
          tabIndex={0}
          role="heading"
          aria-label="profile information"
          className="mt-12 text-4xl font-bold text-gray-800 focus:outline-none"
        >
          Determine your salary based on the below fields...
        </h1>

        {FormsToMap.map((Form, index) => (
          <Form key={index} formRef={formRef} />
        ))}
      </div>
    </div>
  );
}

export default Home;
