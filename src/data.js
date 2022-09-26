import { v4 as uuidv4 } from "uuid";

let users = [];
let teams = [];

function getUser(email) {
  const user = users.find((u) => u.email === email);
  if (user) return Promise.resolve(user);
  else return Promise.reject("No users found");
}

function getExpense() {
  return Promise.resolve([
    { id: 2342, description: "Internet bill", amount: 1000, from: "Ramesh" },
    { id: 453, description: "Internet bill", amount: 1000, from: "Ramesh" },
    { id: 3453, description: "Internet bill", amount: 1000, from: "Ramesh" },
    { id: 34521, description: "Internet bill", amount: 1000, from: "Ramesh" },
    { id: 6543, description: "Internet bill", amount: 1000, from: "Ramesh" }
  ]);
}

/*
  Expense
    -id
    -type
    -title
    -description
    -from
*/

let expenseData = {
  id: 2342,
  type: "internet-expense",
  title: "Internet Expense of month March",
  description: "alsdfhalsdifhasdiofj",
  from: "John",
  status: "pending",
  message: ""
};

function getExpenseData(expenseId) {
  if (expenseId === 2342) return Promise.resolve(expenseData);
}

function updateExpense(expenseId, status, message) {
  if (expenseId === 2342) {
    expenseData = { ...expenseData, status, message };
    console.log("after update: ", expenseData);
  }
}

function registerAdmin(name, email, password) {
  users.push({
    id: uuidv4(),
    role: "admin",
    name,
    email,
    password
  });
  return Promise.resolve(users.find((user) => user.email === email));
}

function registerNewUser({ name, email, role, teamId }) {
  users.push({
    id: uuidv4(),
    role,
    name,
    email,
    teamId
  });
  return Promise.resolve(users.find((user) => user.email === email));
}

function getTeams(id) {
  console.log(teams);
  if (id) {
    const team = teams.find((t) => t.id === id);
    console.log("team", team);
    if (!team) throw new Error("Team not found");
    return Promise.resolve(team);
  }
  return Promise.resolve(teams);
}

function addNewTeam(name, description) {
  // Should add condition to check if a team alread exist with same name
  teams.push({
    id: uuidv4(),
    name,
    description
  });
  return Promise.resolve(users.find((user) => user.email === email));
}

function getEmployees(user) {
  console.log(user);
  return Promise.resolve(users);
}

function getEmployeesForTeam(teamId) {
  return Promise.resolve(users.filter((user) => user.teamId === teamId));
}

export {
  getUser,
  getExpense,
  getExpenseData,
  updateExpense,
  registerNewUser,
  getTeams,
  addNewTeam,
  getEmployees,
  registerAdmin,
  getEmployeesForTeam
};
