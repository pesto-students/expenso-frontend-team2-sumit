import * as React from "react";
import { getExpense, getExpenseData, updateExpense } from "../data";

function Expense() {
  const [expenses, setExpenses] = React.useState([]);
  const [openExpense, setOpenExpense] = React.useState(null);
  const [openExpenseData, setOpenExpenseData] = React.useState(null);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    getExpense().then((data) => setExpenses(data));
  }, []);

  React.useEffect(() => {
    if (openExpense)
      getExpenseData(openExpense).then((data) => setOpenExpenseData(data));
  }, [openExpense]);

  function approve(expenseId) {
    updateExpense(expenseId, "approved", message);
    setOpenExpense(null);
    setOpenExpenseData(null);
  }

  function reject(expenseId) {
    updateExpense(expenseId, "rejected", message);
    setOpenExpense(null);
    setOpenExpenseData(null);
  }

  return (
    <div>
      <ul>
        {expenses.map(({ id, description, amount, from }) => (
          <li key={id}>
            <button onClick={() => setOpenExpense(id)}>
              <span>{description}</span> amount: <span>{amount}</span> from{" "}
              <span>{from}</span>
            </button>
          </li>
        ))}
        {openExpenseData ? (
          <div>
            <h3>{openExpenseData.title}</h3>
            <div>
              <label htmlFor="message">Message: </label>
              <input
                id="message"
                type="text"
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <button onClick={() => approve(openExpenseData.id)}>
                Approve
              </button>
              <button onClick={() => reject(openExpenseData.id)}>Reject</button>
            </div>
          </div>
        ) : null}
      </ul>
    </div>
  );
}

export { Expense };
