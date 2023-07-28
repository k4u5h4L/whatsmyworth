const SideBar = () => {
  const value = {
    bgColor: "indigo",
    name: "dark",
    main: 700,
    profile: 400,
    notify: 200,
    text: 100,
  };
  return (
    <div className={`flex w-64 flex-col rounded bg-indigo-700 px-6`}>
      {/* {Header Section} */}
      <div
        className={`flex h-24 w-full items-center justify-start space-x-8 text-indigo-100`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M12.32 8a3 3 0 0 0-2-.7H5.63A1.59 1.59 0 0 1 4 5.69a2 2 0 0 1 0-.25a1.59 1.59 0 0 1 1.63-1.33h4.62a1.59 1.59 0 0 1 1.57 1.33h1.5a3.08 3.08 0 0 0-3.07-2.83H8.67V.31H7.42v2.3H5.63a3.08 3.08 0 0 0-3.07 2.83a2.09 2.09 0 0 0 0 .25a3.07 3.07 0 0 0 3.07 3.07h4.74A1.59 1.59 0 0 1 12 10.35a1.86 1.86 0 0 1 0 .34a1.59 1.59 0 0 1-1.55 1.24h-4.7a1.59 1.59 0 0 1-1.55-1.24H2.69a3.08 3.08 0 0 0 3.06 2.73h1.67v2.27h1.25v-2.27h1.7a3.08 3.08 0 0 0 3.06-2.73v-.34A3.06 3.06 0 0 0 12.32 8z"
          />
        </svg>
        <span className="font-sans text-lg font-medium">
          What&apos;s my worth?
        </span>
      </div>
      <div
        className={`flex h-full flex-1 flex-col border-b border-t py-8 border-${value.bgColor}-${value.text} border-opacity-25`}
      >
        <div className="flex flex-1 flex-col py-4">
          <div
            className={`flex flex-col space-y-2 text-${value.bgColor}-${value.text}`}
          >
            <a href="https://github.com/k4u5h4L/whatsmyworth">
              GitHub project link: <br />
              whatsmyworth
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          className={`flex w-full flex-col space-y-2 p-6 text-${value.bgColor}-${value.text} bg-${value.bgColor}-${value.notify} rounded-lg bg-opacity-20`}
        >
          <h3 className="text-sm font-semibold">
            Created by <a href="https://kaush.me">Kaushal</a>
          </h3>
          <p className="text-sm">
            Built with the T3 stack, Next.js, Tailwind CSS, and Tensorflow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
