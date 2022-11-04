import * as React from "react";
import Table from "components/table/table";
import Header from "./table/header";
import Title from "./table/title";

function TailwindList() {
  return (
    <div className="py-12">
      <div className="mx-auto container bg-white shadow rounded">
        <Title />
        <Header />
        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
          <Table />
        </div>
      </div>
      <div className="mx-auto container pt-8 flex justify-center sm:justify-end items-center">
        <a
          className="text-gray-600 mr-5 border-gray-200 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
          href="javascript: void(0)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left"
            width={24}
            height={24}
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
        <p className="text-gray-800 fot-normal text-xs">Page</p>
        <label htmlFor="selectedPage" className="hidden" />
        <input
          id="selectedPage"
          type="text"
          className="bg-white w-6 px-2 mx-2 text-gray-800 focus:outline-none focus:border focus:border-indigo-700 font-normal flex items-center text-xs border-gray-300 rounded border"
          defaultValue={4}
        />
        <p className="text-gray-800 fot-normal text-xs">of 20</p>
        <a
          className="text-gray-600 mx-5 border-gray-200 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
          href="javascript: void(0)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-right"
            width={24}
            height={24}
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
        <label htmlFor="selectedPage1" className="hidden" />
        <input
          id="selectedPage1"
          type="text"
          className="bg-white w-8 px-2 mx-2 text-gray-800 focus:outline-none focus:border focus:border-indigo-700 font-normal flex items-center text-xs border-gray-300 rounded border"
          defaultValue={30}
        />
        <p className="-mt-1 text-gray-800 fot-normal text-xs">per page</p>
      </div>
    </div>
  );
}
export default TailwindList;
