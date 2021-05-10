import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ name, cover, path }) => {
  return (
    <>
      <Link to={path}>
        <div>{name}</div>
        <div>{cover}</div>
      </Link>
    </>
  );
};

export default GameCard;
