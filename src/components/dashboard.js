import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Teams } from "./teams";
import { Employees } from "./employees";

function Dashboard() {
  return (
    <div>
      <div>
        {/* Numbers are currently hardcoded which should be changed later */}
        <Link to="/teams">10 Teams</Link>
        <br />
        <Link to="/employees">100 Employees</Link>
      </div>
      <hr />
    </div>
  );
}

export { Dashboard };
