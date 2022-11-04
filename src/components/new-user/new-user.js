import * as React from "react";
import { addNewTeam } from "api/team.api";

function NewUser() {
  console.log("New Team");

  function addUser(e) {
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
        New User Info
      </h1>
      <p
        role="contentinfo"
        className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
      >
        Fill in the data for User.
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

{
  /* <div>
  {teamList === null ? (
    <span>Loading...</span>
  ) : teamList.length === 0 ? (
    <h3>Add teams before adding employees</h3>
  ) : (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name">Name </label>
        <input id="name" placeholder="Employee Name" type="text" />
      </p>
      <p>
        <label htmlFor="email">Email </label>
        <input id="email" placeholder="Employee email" type="email" />
      </p>
      <p>
        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value={"software-engineer"}>Software Engineer</option>
          <option value={"project-manager"}>Project Manager</option>
          <option value={"project-manager-leader"}>
            Project Manager Leader
          </option>
          <option value={"finance"}>Finance</option>
        </select>
      </p>
      <p>
        <label htmlFor="teams">Team </label>
        <select
          id="teams"
          onChange={() => setSelectedTeam((e) => e.target.value)}
        >
          <option value="default" disabled>
            Select Team
          </option>
          {teamList.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </p>
      <p>
        <button disabled={teamList.length === 0} type="submit">
          Add Employee
        </button>
      </p>
    </form>
  )}
</div>; */
}

export default NewUser;
