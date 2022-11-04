import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "components/common/AuthLayout";
import { Input } from "components/common/Input";
import Logo from "components/common/logo";
import { registerNewAdmin } from "api/user.api";

function Register() {
  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    const { firstName, lastName, email, password } = event.target.elements;
    (async () => {
      const { data } = await registerNewAdmin({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      });
      console.log(data);
      if (data.ok) navigate("/login");
    })();

    // .then((data) => {
    //   console.log("data: ", data);
    //   if (data.ok) navigate("/login");
    //   console.log(data);
    // });
  }

  return (
    <AuthLayout>
      <div className="flex flex-col items-start justify-start">
        <Link to="/">
          <Logo className="mb-2 h-10 w-auto" />
        </Link>
        <h2 className="mt-16 text-lg font-semibold text-gray-900">
          Get started for free.
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Already registered?{" "}
          <Link to="/login">
            <span className="font-semibold text-blue-600">Sign in</span>
          </Link>{" "}
          to your account.
        </p>
      </div>
      <div className="mt-10">
        <div className="mt-6">
          <form onSubmit={register} className="space-y-7">
            <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
              <Input
                label="First name"
                id="firstName"
                name="first_name"
                type="text"
                autoComplete="given-name"
                required
              />
              <Input
                label="Last name"
                id="lastName"
                name="last_name"
                type="text"
                autoComplete="family-name"
                required
              />
            </div>
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
              autoComplete="new-password"
              required
            />
            <div className="pt-1">
              <button
                type="submit"
                className="w-full rounded-full border border-transparent bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign up <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Register;
