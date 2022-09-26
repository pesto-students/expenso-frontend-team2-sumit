import "./styles.css";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthenticatedApp } from "./components/authenticated-app";
import { UnAuthenticatedApp } from "./components/unauthenticated-app";
import { AuthProvider, useAuth } from "./context/auth-context";

function Validate() {
  const [user] = useAuth();
  console.log(user);
  if (user) return <AuthenticatedApp />;
  return <UnAuthenticatedApp />;
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Validate />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
