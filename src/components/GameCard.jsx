import React from "react";

const GameCard = ({name, cover, path}) => {
  return (
    <>
     <div>{name}</div> 
     <div>{cover}</div>
    </>
  );
};

export default GameCard;