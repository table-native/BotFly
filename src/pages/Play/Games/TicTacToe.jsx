import React from "react";

const TicTacToe = () => {
  const addCross = (e) => {
    e.target.classList.add("x");
  };
  return (
    <>
      <div className="grid place-items-center gap-4 m-4 text-2xl grid-rows-2">
        <div className="border-l-8 border-r-8 border-transparentDark rounded w-full h-full p-5 grid place-items-center">
          <div className=" grid grid-cols-3 grid-rows-3 w-max">
            <div onClick={addCross} className="square square-t-1">
              <div className=""></div>
            </div>
            <div onClick={addCross} className="square square-t-2">
              <div className=""></div>
            </div>
            <div onClick={addCross} className="square square-t-3">
              <div className=""></div>
            </div>
            <div onClick={addCross} className="square square-m-4">
              <div className=""></div>
            </div>
            <div onClick={addCross} className="square square-m-5">
              <div className=""></div>
            </div>
            <div onClick={addCross} className="square square-m-6">
              <div className=""></div>
            </div>
            <div onClick={addCross} className="square square-b-7">
              <div className=""></div>
            </div>
            <div onClick={addCross} className="square square-b-8">
              <div className=""></div>
            </div>
            <div onClick={addCross} className="square square-b-9">
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="bg-transparentDark text-green-500 rounded w-full max-h-60 p-3 overflow-scroll ">
          <div>{"const makeMove = (gameState, availaibleMoves) => {"}</div>
          <div
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none"
          >
            const move = availaibleMoves[5]; <br /> return move;
          </div>
          <div>{"}"}</div>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
