import * as React from "react";
import { useAuth } from "../context/auth-context";
import { getUser, registerAdmin } from "../data";

function UnAuthenticatedApp() {
  const [, setUser] = useAuth();
  const [showModal, setShowModal] = React.useState("none"); // login, register
  const [modalStatus, setModalStatus] = React.useState("form"); // loading, success, error

  function login(event) {
    event.preventDefault();
    setModalStatus("loading");
    const email = event.target.elements.email;
    getUser(email.value).then((data) => {
      setUser(data);
      setShowModal("none");
      setModalStatus("form");
    });
  }

  function register(event) {
    event.preventDefault();
    setModalStatus("loading");
    const { name, email, password } = event.target.elements;
    registerAdmin(name.value, email.value, password.value).then((data) => {
      console.log(data);
      setShowModal("none");
      setModalStatus("form");
    });
  }

  return (
    <div>
      <h1>Expenso</h1>
      <div>
        <button onClick={() => setShowModal("login")}>Login</button>
        <br />
        <button onClick={() => setShowModal("register")}>Register</button>
      </div>

      {modalStatus === "loading" ? (
        <h3>Loading...</h3>
      ) : modalStatus === "form" ? (
        showModal === "register" ? (
          <div>
            <button onClick={() => setShowModal("none")}>X</button>
            <form onSubmit={register}>
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" required />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" required />
              </div>
              <div>
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        ) : showModal === "login" ? (
          <div>
            <button onClick={() => setShowModal("none")}>X</button>
            <form onSubmit={login}>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" />
              </div>
              {/* Need to add confirm password functionality */}
              <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        ) : null
      ) : null}
    </div>
  );
}

export { UnAuthenticatedApp };
