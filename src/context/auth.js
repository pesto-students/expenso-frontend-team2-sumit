import * as React from "react";

const AuthContext = React.createContext(null);
AuthContext.displayName = AuthContext;

function AuthProvider(props) {
  const [user, setUser] = React.useState(null);
  const value = [
    { name: "Lohith Mallikarjun", role: "admin", email: "lm@gmail.com" },
    setUser,
  ];
  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext must be used within AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
