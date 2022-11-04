function Header({title}) {
  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
      <div className="w-full text-blue-600 lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
        <h2 className="font-bold text-2xl">{title}</h2>
      </div>
      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center space-x-5 justify-end">
        <div className="flex items-center lg:border-l lg:border-r border-gray-300  py-3 lg:py-0 lg:px-6">
          <p className="text-base text-gray-600" id="page-view">
            Viewing 1 - 20 of 60
          </p>
          <a
            className="text-gray-600 ml-2 border-transparent border cursor-pointer rounded"
            onclick="pageView(false)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </a>
          <a
            className="text-gray-600 border-transparent border rounded focus:outline-none cursor-pointer"
            onclick="pageView(true)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col ">
          <div className="relative">
            <div className="absolute text-gray-600 flex items-center pr-3 right-0 border-l h-full cursor-pointer">
              <div className="pl-2 pr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-filter"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
                </svg>
              </div>
              <span className="text-sm leading-tight tracking-normal">
                Filter
              </span>
            </div>
            <div className="absolute text-gray-600 flex items-center pl-3 h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search"
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
                <circle cx={10} cy={10} r={7} />
                <line x1={21} y1={21} x2={15} y2={15} />
              </svg>
            </div>
            <input
              id="search"
              className="text-gray-600 dark:text-gray-400 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal pr-20 sm:pr-32 h-10 flex items-center pl-10 text-sm border-gray-300 rounded border shadow"
              placeholder="Search by name or email"
            />
          </div>
        </div>
        {/* <div className="lg:ml-6 flex items-center">
          <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm">
            Download All
          </button>
          <div className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus"
              width={28}
              height={28}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={12} y1={5} x2={12} y2={19} />
              <line x1={5} y1={12} x2={19} y2={12} />
            </svg>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
