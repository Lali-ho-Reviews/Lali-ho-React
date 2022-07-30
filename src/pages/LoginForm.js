import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/authServices";

// mock details to test 



const LoginForm = ({ activateUser }) => {
  const navigate = useNavigate();
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formData).then((user) => {
      // console.log(user)
      if (user.error) {
        console.log("user.error", user.error);
        setError(user.error);
      } else {
        setError(null);
        sessionStorage.setItem("username", user.username);
        sessionStorage.setItem("token", user.jwt);
        console.log(sessionStorage.getItem("username"));
        activateUser(user);
        setFormData(initialFormData);
        navigate("/fc");
      }
    });
  };

  const handleFormData = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>


        
        <div class="bg-grey-lighter min-h-screen flex flex-col">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-blue-500 w-full">
              <h1 class="mb-8 text-3xl text-center">Sign in</h1>

              <label>Email:</label>
              <input
                type="email"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormData}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleFormData}
              />

              <button
                type="submit"
                value="Login"
                class="w-full text-center py-3 rounded bg-logoblue text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Log in
              </button>
            </div>

            <div class="text-grey-dark mt-6">
              Don't have an account?
              <a
                class="no-underline border-b border-blue text-blue-500"
                href="/auth/signup"
              >
                Create one
              </a>
              .
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
