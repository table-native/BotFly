import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/img/hero-img.svg";

const Hero = ({ loggedIn, setLoggedIn }) => {
  return (
    <>
      <div className="grid lg:grid-cols-2 place-items-center h-80vh">
        <div className="uppercase flex flex-col p-6 row-start-2 lg:row-start-1 text-center lg:text-left">
          <h1 className="font-itim text-gray-300 text-xl sm:3xl lg:text-5xl">
            The Gaming Platform{" "}
            <div className="inline-block lg:block">
              where your code <div className="inline-block lg:block">plays</div>
            </div>
          </h1>
          <h2 className="font-mono text-sm sm:text-xl text-gray-500 mt-3">
            Make your bot to play with others
          </h2>
          <h2 className="font-mono text-sm sm:text-xl text-gray-200">
            The Best Wins
          </h2>
          <NavLink className="btn-special mt-3 lg:w-max" to="/games">
            Take me to the game
          </NavLink>
        </div>
        <div className="row-start-1 lg:row-start-1 self-end lg:self-center mr-3">
          <img
            src={heroImage}
            alt="Hero"
            className="w-hero animate-updown pointer-events-none"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
