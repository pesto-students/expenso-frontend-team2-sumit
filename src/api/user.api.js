import api from "./api";

const URLS = {
  adminRegisterUrl: "auth/register",
  loginUrl: "auth/login",
  newUserUrl: "employee/newUser",
  employees: "employee",
  logout: "auth/logout"
};

export function registerNewAdmin({
  firstName,
  lastName,
  email,
  password,
  companyName,
  companyEmail,
}) {
  return api.post(URLS.adminRegisterUrl, {
    firstName,
    lastName,
    role: "admin",
    email,
    password,
    companyName,
    companyEmail,
  });
} 

export function addNewUser({ firstName, lastName, role, email, teams }) {
  return api.post(URLS.newUserUrl, { firstName, lastName, role, email, teams });
}

export function loginUser({ email, password }) {
  return api.post(URLS.loginUrl, {
    email,
    password,
  });
}

export function getEmployees() {
  return api.get(URLS.employees);
}

export function logout() {
  return api.post(URLS.logout);
}