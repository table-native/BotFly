import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ name, cover, path }) => {
  return (
    <>
      <Link to={path} className="bg-transparentDarker rounded p-4 ">
        <img src={cover} alt="" className="w-full" />
        <div>{name}</div>
      </Link>
    </>
  );
};

export default GameCard;
