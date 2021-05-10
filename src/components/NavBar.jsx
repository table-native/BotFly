import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/Logo.svg";

const NavBar = ({ loggedIn }) => {
  return (
    <>
      <div>
        <nav className="w-full flex justify-between items-center p-4 bg-dark">
          <NavLink
            className="font-itim text-xl sm:text-2xl flex items-center uppercase mr-1 sm:mr-0"
            to="/"
          >
            <img src={logo} alt="BotFlyLogo" className="w-16" />
            BotFly
          </NavLink>
          {loggedIn ? (
            <div>O</div>
          ) : (
            <div>
              <NavLink className="mx-2 btn-primary" to="/login">
                Login
              </NavLink>
              <NavLink className="mx-2 btn-primary" to="/signup">
                Signup
              </NavLink>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
