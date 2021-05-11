import React from "react";
import GamesDB from "./GamesDB";
import GameCard from "../../components/GameCard";

const GamesList = () => {
  return (
    <>
      <div className="grid grid-cols-autofill">
        {GamesDB.map((e) => {
          return (
            <>
              <GameCard key={e.id} name={e.name} cover={e.img} path={`/games/${e.path}`} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default GamesList;
