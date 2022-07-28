import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/authServices";

const SignUpForm = ({ activateUser }) => {
  const navigate = useNavigate();
  const initialFormData = {
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(formData).then((user) => {
      // console.log(user)
      if (user.error) {
        console.log(user.error);
        let errorMessage = "";
        Object.keys(user.error).forEach((key) => {
          errorMessage = errorMessage.concat("", `${key} ${user.error[key]}`);
        });
        setError(errorMessage);
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
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <label>Username:</label>
            <input
              type="text"
              class="form-text block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              id="username"
              placeholder="Username"
              value={formData.username}
            onChange={handleFormData}
            />
            
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
            
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              id="password_confirmation"
              placeholder="Confirm Password"
              value={formData.password_confirmation}
            onChange={handleFormData}
            />

            <button
              type="submit"
              value="Login"
              class="w-full text-center py-3 rounded bg-logoblue text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>

            
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?  
            <a
              class="no-underline border-b border-blue text-blue-500"
              href="/auth/signin"
            >
               Log in
            </a>
            
          </div>
        </div>
      </div>

           




      </form>

      
    </>
  );
};

export default SignUpForm;
