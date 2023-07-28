"use client";

import { useRouter } from "next/navigation";
import type { MutableRefObject } from "react";
import type { InputType } from "~/types/input";

type PropType = {
  formRef: MutableRefObject<InputType>;
};

const Result = ({ formRef }: PropType) => {
  const router = useRouter();

  return (
    <>
      <h2
        tabIndex={0}
        role="heading"
        aria-label="profile information"
        className="mt-12 text-3xl font-bold text-gray-800 focus:outline-none"
      >
        Your salary is...
      </h2>
      <p
        role="contentinfo"
        className=" focus:outline-nonetext-sm mt-4 font-light leading-tight text-gray-600"
      >
        Don&apos;t worry if it seems to be less than what you are expecting. AI
        tends to make mistakes as well!
      </p>
      <h2
        role="heading"
        aria-label="enter Personal data"
        className="mt-10 text-xl font-semibold leading-7 text-gray-800"
      >
        Salary in USD: $100,000
      </h2>
      <button
        role="button"
        aria-label="Next step"
        onClick={() => {
          router.refresh();
        }}
        className="mt-7 flex items-center justify-center rounded border border-gray-400 bg-white px-7 py-4 hover:bg-gray-100 focus:outline-none focus:ring-2  focus:ring-gray-700 focus:ring-offset-2 md:mt-14"
      >
        <span className="text-center text-sm font-medium capitalize text-gray-800">
          I wanna go again
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
      </button>
    </>
  );
};

export default Result;
