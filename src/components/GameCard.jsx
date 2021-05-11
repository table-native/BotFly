import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ name, path }) => {
  return (
    <>
      <Link to={path} className="bg-transparentDark rounded p-4 m-2 text-2xl">
        <div>{name}</div>
      </Link>
    </>
  );
};

export default GameCard;
