import * as React from "react";
import { addNewTeam } from "api/team.api";

function NewTeam() {
  console.log("New Team");

  function addTeam(e) {
    e.preventDefault();
    console.log("Add Team");
    const { name, description } = e.target.elements;
    addNewTeam(name.value, description.value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form align="center" className="w-full bg-white p-10" onSubmit={addTeam}>
      <h1
        tabIndex={0}
        role="heading"
        aria-label="profile information"
        className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
      >
        New Team Info
      </h1>
      <p
        role="contentinfo"
        className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
      >
        Fill in the data for team. It will take a couple of minutes.
      </p>
      <div className="mt-8 md:flex items-center mx-auto justify-center">
        <div className="flex flex-col">
          <label className="mb-3 text-sm leading-none text-gray-800">
            Team Name
          </label>
          <input
            type="text"
            id="name"
            tabIndex={0}
            aria-label="Enter team name"
            className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
            defaultValue="Marketing Team"
          />
        </div>
      </div>
      <div className="mt-12 md:flex items-center justify-center">
        <div className="flex flex-col">
          <label className="mb-3 text-sm leading-none text-gray-800">
            Team Description
          </label>
          <textarea
            type="text"
            id="description"
            tabIndex={0}
            aria-label="Enter team description"
            className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
            defaultValue="Marketing Team Description"
          />
        </div>
      </div>
      <button
        align="center"
        role="button"
        type="submit"
        aria-label="Next step"
        className="flex mx-auto items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
      >
        <span className="text-sm font-medium text-center text-gray-800 capitalize">
          Add Team
        </span>
      </button>
    </form>
  );
}

export default NewTeam;
