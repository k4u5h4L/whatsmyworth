const Form1 = () => {
  return (
    <>
      <h1
        tabIndex={0}
        role="heading"
        aria-label="profile information"
        className="mt-12 text-3xl font-bold text-gray-800 focus:outline-none"
      >
        Profile info
      </h1>
      <p
        role="contentinfo"
        className=" focus:outline-nonetext-sm mt-4 font-light leading-tight text-gray-600"
      >
        Fill in the data for profile. It will take a couple of minutes. <br />
        You only need a passport
      </p>
      <h2
        role="heading"
        aria-label="enter Personal data"
        className="mt-10 text-xl font-semibold leading-7 text-gray-800"
      >
        Personal data
      </h2>
      <p className="mt-0.5 text-sm font-light leading-none text-gray-600">
        Your details and place of birth
      </p>
      <div className="mt-8 items-center md:flex">
        <div className="flex flex-col">
          <label className="mb-3 text-sm leading-none text-gray-800">
            First name
          </label>
          <input
            type="name"
            tabIndex={0}
            aria-label="Enter first name"
            className="w-64 rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800"
            defaultValue="William"
          />
        </div>
        <div className="mt-8 flex flex-col md:ml-12 md:mt-0">
          <label className="mb-3 text-sm leading-none text-gray-800">
            Last name
          </label>
          <input
            type="name"
            tabIndex={0}
            aria-label="Enter last name"
            className="w-64 rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800"
            defaultValue="Smith"
          />
        </div>
      </div>
      <div className="mt-12 items-center md:flex">
        <div className="flex flex-col">
          <label className="mb-3 text-sm leading-none text-gray-800">
            Email Address
          </label>
          <input
            type="email"
            tabIndex={0}
            aria-label="Enter email Address"
            className="w-64 rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800"
            defaultValue="smith.william@gmail.com"
          />
        </div>
        <div className="mt-8 flex flex-col md:ml-12 md:mt-0">
          <label className="mb-3 text-sm leading-none text-gray-800">
            Phone number
          </label>
          <input
            type="number"
            tabIndex={0}
            aria-label="Enter phone number"
            className="w-64 rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800"
            defaultValue="+81 839274"
          />
        </div>
      </div>
      <div className="mt-12 items-center md:flex">
        <div className="flex flex-col">
          <label className="mb-3 text-sm leading-none text-gray-800">
            Date of birth
          </label>
          <input
            type="date"
            tabIndex={0}
            aria-label="Enter date of birth"
            className="w-64 rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800"
            defaultValue="28.03.1997"
          />
        </div>
        <div className="mt-8 flex flex-col md:ml-12 md:mt-0">
          <label className="mb-3 text-sm leading-none text-gray-800">
            Place of birth
          </label>
          <input
            type="name"
            tabIndex={0}
            aria-label="Enter place of birth"
            className="w-64 rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800"
            defaultValue="San Diego, CA, USA"
          />
        </div>
      </div>
      <div className="mt-12">
        <div className="flex items-center py-4">
          <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-gray-400 bg-white dark:border-gray-700 dark:bg-gray-800">
            <input
              type="checkbox"
              tabIndex={0}
              aria-label="I agree with the terms of service"
              defaultChecked
              className="checkbox absolute h-full w-full cursor-pointer opacity-0"
            />
            <div className="check-icon hidden rounded-sm bg-blue-500 text-white">
              <svg
                className="icon icon-tabler icon-tabler-check"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>
          </div>
          <p className="ml-2 text-sm leading-none">
            I agree with the{" "}
            <span className="text-indigo-700">terms of service</span>
          </p>
        </div>
      </div>
      <button
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
      </button>
    </>
  );
};

export default Form1;
