import * as React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { Expense } from "./expense";
import { Approval } from "./approval";
import { useAuth } from "../context/auth-context";
import Teams from "./teams";
import { TeamInfo } from "./team-info";
import Employees from "./employees";
import EmployeesIndex from "./employees-index";
import EmployeeInfo from "./employee-info";
import TeamsIndex from "./teams-index";
// import PrivateRoute from "../utils/protected-route";

function AuthenticatedApp() {
  const [user, setUser] = useAuth();

  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Dashboard
        </NavLink>
        <NavLink to="/expense">Expense</NavLink>
        <NavLink to="/approval">Approval</NavLink>
        <button onClick={() => setUser(null)}>Logout</button>
      </nav>
      <hr />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="/teams" element={<Teams />}>
            <Route path="/teams" element={<TeamsIndex />} />
            <Route path="/teams/:teamId" element={<TeamInfo />} />
          </Route>
          <Route path="/employees" element={<Employees />}>
            <Route path="/employees" element={<EmployeesIndex />} />
            <Route path="/employees/:employeeId" element={<EmployeeInfo />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export { AuthenticatedApp };
