import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "components/common/AuthLayout";
import { Input } from "components/common/Input";
import Logo from "components/common/logo";
import { useAuth } from "context/auth";
import { loginUser } from "api/user.api";

export default function Login() {
  const navigate = useNavigate();
  const [, setUser] = useAuth();
  const [errorMessage, setErrorMessage] = React.useState(null);

  async function login(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const data = await loginUser(email.value, password.value);
    console.log(data);
    if (data.ok) {
      setUser(data);
      navigate("/dashboard");
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <AuthLayout>
      <div className="flex flex-col items-start justify-start">
        <Link to="/">
          <Logo className="mb-2 h-10 w-auto" />
        </Link>
        <h2 className="mt-16 text-lg font-semibold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link to="/register">
            <span className="font-semibold text-blue-600">Sign up</span>
          </Link>{" "}
          for a free trial.
        </p>
      </div>
      <div className="mt-10">
        <div className="mt-6">
          <form onSubmit={login} className="space-y-7">
            <Input
              label="Email address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
            <div className="pt-1">
              <button
                type="submit"
                className="w-full rounded-full border border-transparent bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
