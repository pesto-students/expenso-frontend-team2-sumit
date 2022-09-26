import * as React from "react";

const AuthContext = React.createContext(null);
AuthContext.displayName = AuthContext;

function AuthProvider(props) {
  const [user, setUser] = React.useState(null);
  const value = [{ id: "wefs", name: "Lohith", role: "admin" }, setUser];
  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
