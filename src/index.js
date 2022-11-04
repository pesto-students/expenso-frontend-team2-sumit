import { AuthProvider } from "context/auth";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
