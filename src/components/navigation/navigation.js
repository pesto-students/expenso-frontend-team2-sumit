import * as React from "react";
import Logo from "../common/logo";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "context/auth";
import DesktopNavigation from "./desktop.navigation";

function Navigation() {
  return (
    <>
      <DesktopNavigation />
    </>
  );
}

export default Navigation;
