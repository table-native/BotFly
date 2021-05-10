import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/Logo.svg";

const NavBar = () => {
  return (
    <>
      <div>
        <nav className="w-full flex justify-between items-center p-4 bg-dark">
          <NavLink className="font-itim text-2xl flex items-center uppercase" to="/">
            <img src={logo} alt="BotFlyLogo" className="w-16" />
            BotFly
          </NavLink>
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
