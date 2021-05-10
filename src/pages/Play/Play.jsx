import React from "react";
import {  Route, useParams } from "react-router-dom";
import GamesDB from "./GamesDB";
import GameCard from "../../components/GameCard";

const Play = () => {
  const { name } = useParams();
  return (
    <>
      <div className="grid grid-cols-autofill">
        {GamesDB.map((e) => {
          const Comp = e.component;
          return (
            <>
              <Route path={e.path}>
                <Comp />
              </Route>
              <GameCard name={e.name} cover={e.img} path={e.path} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Play;
