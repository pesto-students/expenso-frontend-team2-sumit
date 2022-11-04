import * as React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getTeams } from "api/team.api";
import { addNewUser, getEmployees } from "api/user.api";
import { useAuth } from "../../context/auth";

function TeamInfo() {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const [user] = useAuth();
  const [team, setTeam] = React.useState(null);
  const [employeeList, setEmployeeList] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [newEmployee, setNewEmployee] = React.useState(null);
  const [role, setRole] = React.useState("software-engineer");

  React.useEffect(() => {
    // network request to fetch employees of this team
    (async () => {
      try {
        const teamData = await getTeams(teamId);
        console.log(teamData);
        setTeam(teamData);
      } catch (e) {
        console.warn(e);
        navigate("/teams");
      }
      const employees = await getEmployees(teamId);
      setEmployeeList(employees);
    })();
    // getTeams(teamId).then((data) => setTeam(data));
  }, [teamId]);

  React.useEffect(() => {
    if (!newEmployee) return;
    registerNewUser(newEmployee)
      .then((data) => {
        setNewEmployee(null);
        return getEmployees(teamId);
      })
      .then((data) => {
        console.log("employeelist: ", data);
        setEmployeeList(data);
        setShowModal(false);
        setRole("software-engineer");
      });
  }, [newEmployee, user]);

  function handleAddNewEmployeeSubmit(event) {
    event.preventDefault();
    let { name, email } = event.target.elements;
    name = name.value;
    email = email.value;
    setNewEmployee({ name, email, teamId, role });
  }

  // if (employeeList === null) return <h3>Loading...</h3>;

  return (
    <div>
      <h3>
        {team?.name}
        <button onClick={() => setShowModal(true)}>Add new Employee</button>
      </h3>
      <ul>
        {employeeList === null ? (
          <h3>Loading...</h3>
        ) : employeeList.length !== 0 ? (
          employeeList.map(({ id, name }) => (
            <li key={id}>
              <Link to={`/employees/${id}`}>{name}</Link>
            </li>
          ))
        ) : (
          <h3>Add Employees</h3>
        )}
      </ul>
      {showModal && (
        <div>
          <h3>Add new employee</h3>
          <form onSubmit={handleAddNewEmployeeSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
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
              <button type="submit">Add Employee</button>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default TeamInfo;
