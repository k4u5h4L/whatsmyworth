/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import { useEffect, type MutableRefObject, useState } from "react";
import type { InputType } from "~/types/input";
import * as tf from "@tensorflow/tfjs";

type PropType = {
  formRef: MutableRefObject<InputType>;
};

// hostname: window.location.origin
const Result = ({ formRef }: PropType) => {
  const [model, setModel] = useState<tf.LayersModel>();
  const [loading, setLoading] = useState(false);
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    const loadModel = async () => {
      console.log("Model is being loaded...");
      const model = await tf.loadLayersModel("/model/model.json");
      setModel(model);
      console.log("Model is loaded");
    };

    if (typeof window !== "undefined") {
      loadModel();
    }
  }, []);

  const evaluateModel = () => {
    setLoading(true);
    console.log(formRef.current);

    const pred = model!.predict(
      tf.tensor2d([
        [
          formRef.current.age,
          formRef.current.gender,
          formRef.current.education,
          formRef.current.role,
          formRef.current.yoe,
          formRef.current.country,
          formRef.current.race,
        ],
      ])
    );

    // @ts-ignore
    setSalary(pred.dataSync()[0]);

    setLoading(false);
  };

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
        Salary in USD: {loading ? "Thinking..." : formatMoney(salary)}
      </h2>
      <button
        role="button"
        aria-label="Next step"
        onClick={evaluateModel}
        className="mt-7 flex items-center justify-center rounded border border-gray-400 bg-white px-7 py-4 hover:bg-gray-100 focus:outline-none focus:ring-2  focus:ring-gray-700 focus:ring-offset-2 md:mt-14"
      >
        <span className="text-center text-sm font-medium capitalize text-gray-800">
          Check my salary!
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

const formatMoney = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    notation: "standard",
  })
    .format(amount)
    .replace(/^(\D+)/, "$1 ")
    .replace(/\s+/, " ")
    .replace(/[A-Za-z]$/, " $&");
};
