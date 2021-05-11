import React from "react";
import { useParams } from "react-router";
import GamesDB from "./GamesDB";

const Game = () => {
  const { name } = useParams();
  const currGame = GamesDB.filter((e) => e.path === name);
  let Game;
  if (currGame !== [] && currGame.length === 1) {
    Game = currGame[0].component;
  }
  return <>{Game ? <Game /> : "Game Not found"}</>;
};

export default Game;
