import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const inputHandler = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <div className="grid place-items-center">
        <form
          className="flex flex-col w-11/12 sm:w-2/3 lg:w-2/5 bg-transparentDarker rounded p-4"
          onSubmit={submitHandler}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={inputHandler}
            value={email}
            placeholder="Enter your email address here"
            className="input bg-transparentDark my-3 px-2 py-1"
          />
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
