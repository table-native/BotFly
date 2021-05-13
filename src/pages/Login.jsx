import React, { useState } from "react";
import { useHistory } from "react-router";
import svc from "../gRPCservice";
let proto = require("botfly-model/clientjs/user_service_pb");

const Login = ({ loggedIn, setLoggedIn, jwt, setJwt }) => {
  const [email, setEmail] = useState("");
  const inputHandler = (e) => {
    setEmail(e.target.value);
  };
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (/\S/.test(email)) {
      let uid = new proto.UserIdentity();
      uid.setEmailid(email);
      svc.userService.login(uid, null, (err, resp) => {
        if (err) {
          console.log("toot gaya.. dekho " + err);
          return;
        }

        setLoggedIn(true);
        setJwt(resp.jwt);
        history.push("/games")
      });
    }
  };
  return (
    <>
      <div className="grid place-items-center h-80vh">
        <form
          className="flex flex-col w-11/12 sm:w-2/3 lg:w-2/5 bg-transparentDarker rounded p-4"
          onSubmit={submitHandler}
        >
          <label htmlFor="email" className="text-gray-500">
            Email
          </label>
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
