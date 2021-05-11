import React from "react";
import { useParams } from "react-router-dom";
import GamesDB from "./GamesDB";
import GameCard from "../../components/GameCard";

const GamesList = () => {
  const { name } = useParams();

  return (
    <>
      <div className="grid grid-cols-autofill">
        {GamesDB.map((e) => {
          return (
            <>
              <GameCard name={e.name} cover={e.img} path={e.path} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default GamesList;
