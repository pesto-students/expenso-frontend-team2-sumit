import * as React from "react";
import { useParams } from "react-router-dom";

function EmployeeInfo() {
  const { employeeId } = useParams();
  return <h3>{employeeId}</h3>;
}

export default EmployeeInfo;
