import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <nav className="w-full flex justify-between items-center p-4 bg-dark">
          <NavLink className="font-itim text-2xl" to="/">BugsFly</NavLink>
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
