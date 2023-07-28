/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect } from "react";

function Slider() {
  useEffect(() => {
    const range7 = document.getElementById("range7")!,
      setValue7 = () => {
        const newValue = Number(
            // @ts-ignore
            ((range7.value - range7.min) * 100) / (range7.max - range7.min)
          ),
          newPosition = 16 - newValue * 0.32;
        document.documentElement.style.setProperty(
          "--range7-progress",
          `calc(${newValue}% + (${newPosition}px))`
        );
      };
    document.addEventListener("DOMContentLoaded", setValue7);
    range7.addEventListener("input", setValue7);
  });
  return (
    <>
      <p className="pt-3  text-xs text-gray-600">Selected age:</p>
      <div className="range-slider_slider_7">
        <div id="tooltip_slider_7" />
        <input
          id="range7"
          className="rounded-full"
          type="range"
          step={10}
          defaultValue={0}
          min={0}
          max={800}
        />
      </div>
      <div className="-mt-2 flex items-center justify-between">
        <div className="h-4 w-0.5 bg-gray-600" />
        <div className="-mt-3 h-3 w-0.5 bg-gray-600" />
        <div className="-mt-3 h-3 w-0.5 bg-gray-600" />
        <div className="-mt-3 h-3 w-0.5 bg-gray-600" />
        <div className="h-4 w-0.5 bg-gray-600" />
        <div className="-mt-3 h-3 w-0.5 bg-gray-600" />
        <div className="-mt-3 h-3 w-0.5 bg-gray-600" />
        <div className="-mt-3 h-4 w-0.5 bg-gray-600" />
        <div className="h-5 w-0.5 bg-gray-600" />
        <div className="-mt-3 h-3 w-0.5 bg-gray-600" />
        <div className="-mt-3 h-3 w-0.5 bg-gray-600" />
        <div className="-mt-3 h-3 w-0.5 bg-gray-600" />
        <div className="-mt-1 h-5 w-0.5 bg-gray-600" />
      </div>

      <style>
        {`
    .range-slider_slider_7{
      width: 100%;
      margin: 0 auto;
      position: relative;
   margin-top: 8px;
     
  }
  #range7 { -webkit-appearance: none; width: 100%;  background: #dee4ec; }
  #range7:focus { outline: none; }

  #range7::before, #range7::after {
      position: absolute;
      top: 1rem;
      color: #333;
      font-size: 14px;
      line-height: 1;
      padding: 3px 5px;
      background-color: rgba(0,0,0,.1);
      border-radius: 4px;
    
  }
  #range7::-webkit-slider-runnable-track {
      width: 100%;
      height: 6px;
      cursor: pointer;
      animate: 0.2s;
      background: linear-gradient(90deg, rgba(31, 41, 55, 1) var(--range7-progress), #9CA3AF var(--range7-progress));
      /* background-color: rgb(67 56 202); */
    
  }
  #range7::-webkit-slider-thumb {
      -webkit-appearance: none;
      
      /* box-shadow: 0 1px 3px rgba(0,0,255,.3); */
      border-radius: 50%;
      background:rgba(31, 41, 55, 1);
      cursor: pointer;
      height: 24px; width: 24px;
      margin-top: -3px;
      transform: translateY(calc(-50% + 5px));
  }
`}
      </style>
    </>
  );
}

export default Slider;
