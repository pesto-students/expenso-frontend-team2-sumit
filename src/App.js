import "./styles.css";
import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "context/auth";
import Home from "pages/home";
import Login from "pages/login";
import Register from "pages/register";
import Expense from "components/expense/expense";
import Approval from "components/approval/approval";
import Teams from "pages/teams";
import TeamsIndex from "components/team/teams-index";
import TeamInfo from "components/team/team-info";
import Employees from "components/employee/employees";
import EmployeesIndex from "components/employee/employees-index";
import EmployeeInfo from "components/employee/employee-info";
import Navigation from "components/navigation/navigation";
import PageTitle from "components/pagetitle";
import NewTeam from "components/new-team/new-team";
import NewUser from "components/new-user/new-user";

function AuthenticatedApp() {
  const [user] = useAuth();
  // console.log(user);

  return (
    <div>
      <Router>
        <Navigation />
        <div className="container px-6  pb-20 mx-auto rounded shadow relative bg-white z-10 mb-8 mt-8 w-full">
          <Routes>
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
            <Route path="/createTeam" element={<NewTeam />} />
            <Route path="/newUser" element={<NewUser />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function UnAuthenticatedApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  const [user] = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </div>
  );
}
