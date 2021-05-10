import React from "react";
import { NavLink, useParams } from "react-router-dom";
import GamesDB from "./GamesDB";
import GameCard 

const Play = () => {
  const { name } = useParams();
  return (
    <>
      <div className="grid grid-cols-autofill">
        {
          GamesDB.map((e)=>{
            
          })
        }
      </div>
    </>
  );
};

export default Play;
