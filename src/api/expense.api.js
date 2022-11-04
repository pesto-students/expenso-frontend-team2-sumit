import api from "./api";

const URLS = {
  getExpense: "/expense",
  newExpense: "/expense/new",
  approveExpense: "/expense/approve",
  requests: "/expense/requests",
};

export function getExpense() {
  return api.get(URLS.getExpense);
}

export function addNewExpense({ name, description, amount }) {
  return api.post(URLS.newExpense, { name, description, amount });
}

export function reviewExpenses({ status, expenses }) {
  return api.post(URLS.approveExpense, { status, expenses });
}

/* Yet to be implemented in backend */
export function getRequests() {
  return api.get(URLS.requests);
}
