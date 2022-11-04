import * as React from "react";
import Logo from "../common/logo";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "context/auth";
import { Button } from "./../common/Button";
import { logout } from "api/user.api";

function AccountNavItem() {
  const [user, setUser] = useAuth();
  const { name } = user;

  return (
    <>
      <div className="h-full xl:flex hidden items-center justify-end">
        <div className="h-full flex items-center">
          <div className="w-32 pr-16 h-full flex items-center justify-end border-r" />
          <div className="w-full h-full flex">
            <div className="flex items-center pl-3">
              {/* Logout Button  */}
              <Button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  setUser(null);
                  logout();
                }}
              >
                Logout
              </Button>
            </div>
            <div
              aria-haspopup="true"
              className="w-full flex items-center justify-end relative"
            >
              <p className="text-gray-800 text-sm ml-2">{name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="visible xl:hidden flex items-center">
        <div>
          <div id="menu" className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1={4} y1={6} x2={20} y2={6} />
              <line x1={4} y1={12} x2={20} y2={12} />
              <line x1={4} y1={18} x2={20} y2={18} />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

function DesktopNavItem({ children, className, to }) {
  const classNames = `hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm tracking-normal ${className}`;
  return (
    <NavLink to={to}>
      <li className={classNames}>{children}</li>
    </NavLink>
  );
}

function DesktopNavItemsList() {
  const [user] = useAuth();
  const { role } = user;

  return (
    <ul className="pr-32 xl:flex hidden items-center h-full">
      {role === "teams-lead" || role === "team-manager" ? (
        <>
          <DesktopNavItem to="/teams">Teams</DesktopNavItem>
          {/* Create Gap */}
          <div className="w-8" />
          <DesktopNavItem to="/approve">Approve</DesktopNavItem>
        </>
      ) : null}
      <DesktopNavItem className="text-gry-800 mx-10 relative" to="expense">
        Expense
      </DesktopNavItem>
      {role === "admin" ? (
        <>
          <DesktopNavItem
            className="text-gry-800 mx-10 relative"
            to="/createTeam"
          >
            Add New Team
          </DesktopNavItem>
          <DesktopNavItem
            className="text-gry-800 mx-10 relative"
            to="/createUser"
          >
            Add New User
          </DesktopNavItem>
        </>
      ) : null}
    </ul>
  );
}

function DesktopNavigation() {
  return (
    <nav className="w-full mx-auto bg-white shadow relative z-20">
      <div className="justify-between container px-6 h-16 flex items-center lg:items-stretch mx-auto">
        <div className="flex items-center">
          <Logo />
          <DesktopNavItemsList />
        </div>
        <AccountNavItem />
      </div>
    </nav>
  );
}

export default DesktopNavigation;
