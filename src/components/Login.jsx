import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg"
        alt="logo"
      />
      <form className="w-3/12 absolute p-12 bg-black/85 my-36 mx-auto right-0 left-0">
        <h1 className="font-bold text-3xl text-white my-4">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-2 my-4 w-full text-white bg-gray-700 font-bold"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full text-white bg-gray-700 font-bold"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 text-white font-bold"
        />
        <button className="p-2 my-8 bg-red-700 w-full text-white font-bold">
          Sign in
        </button>
        <p
          onClick={toggleSignInForm}
          className="text-white font-bold cursor-pointer"
        >
          {isSignInForm
            ? "New to Netflix sign up Now"
            : "already register sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
