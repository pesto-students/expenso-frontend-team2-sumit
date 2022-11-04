import * as React from "react";
import { useAuth } from "context/auth";
import { getEmployees, addNewUser } from "api/user.api";
import { getTeams } from "api/team.api";
import { Link } from "react-router-dom";

function EmployeesIndex() {
  const [employeeList, setEmployeeList] = React.useState(null);
  const [teamList, setTeamList] = React.useState(null);
  const [selectedTeam, setSelectedTeam] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [addNewEmployee, setAddNewEmployee] = React.useState(false);
  const [role, setRole] = React.useState("software-engineer");
  const [user] = useAuth();

  React.useEffect(() => {
    getEmployees(user).then((data) => setEmployeeList(data));
  }, []);

  React.useEffect(() => {
    if (!showModal) return;
    (async () => {
      const teams = await getTeams();
      setTeamList(teams);
    })();
    // getTeams().then((data) => {
    //   setTeamList(data);
    // });
  }, [showModal]);

  React.useEffect(() => {
    if (!addNewEmployee) return;
    (async () => {
      const newUser = addNewUser(addNewEmployee);
      console.log(newUser);
    })();
    // registerNewUser(addNewEmployee).then((data) => console.log(data));
  }, [addNewEmployee]);

  function handleSubmit(event) {
    event.preventDefault();
    const { name, email } = event.target.elements;
    console.log(name.value);
    setAddNewEmployee({ name, teamId: selectedTeam, email, role });
  }

  if (employeeList === null) return <h3>Loading...</h3>;

  return (
    <div>
      <h1>
        Employees
        <button onClick={() => setShowModal(true)}>Add new Employee</button>
      </h1>
      <div>
        {employeeList.length !== 0 ? (
          <ul>
            {employeeList.map((e) => (
              <li key={e.name}>
                <Link to={`/employees/${e.id}`}>{e.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <h3>Add Employees</h3>
        )}
      </div>
      {showModal && (
        {/* <div>
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
        </div> */}
      )}
    </div>
  );
}

export default EmployeesIndex;
