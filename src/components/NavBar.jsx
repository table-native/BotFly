import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <nav className="w-full flex justify-between p-4">
          <NavLink className="font-itim" to="/">BugsFly</NavLink>
          <div>
            <NavLink className="mx-2 btn-primary" to="/login">
              Login
            </NavLink>
            <NavLink className="mx-2 btn-primary" to="/signup">
              Signup
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
