import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const inputHandler = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <div className="bg-transparentDarker">
        <div className="flex flex-col w-2/5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={inputHandler}
            value={email}
            className="input bg-transparentDark"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
