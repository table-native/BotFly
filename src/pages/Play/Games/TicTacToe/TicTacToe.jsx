import React from "react";
import Code from "../../../../components/Code";
import UserCode from "../../../../components/UserCode";
import "./style.css";

const TicTacToe = () => {
  return (
    <>
      <div className="grid place-items-center gap-4 m-4 text-2xl grid-rows-2 h-screen">
        <div className="border-l-8 border-r-8 border-transparentDark rounded w-full p-5 grid place-items-center row-span-1">
          <div className=" grid grid-cols-3 grid-rows-3 w-max">
            <div className="square square-t-1">
              <div className=""></div>
            </div>
            <div className="square square-t-2">
              <div className=""></div>
            </div>
            <div className="square square-t-3">
              <div className=""></div>
            </div>
            <div className="square square-m-4">
              <div className=""></div>
            </div>
            <div className="square square-m-5">
              <div className=""></div>
            </div>
            <div className="square square-m-6">
              <div className=""></div>
            </div>
            <div className="square square-b-7">
              <div className=""></div>
            </div>
            <div className="square square-b-8">
              <div className=""></div>
            </div>
            <div className="square square-b-9">
              <div className=""></div>
            </div>
          </div>
        </div>
        {/* <div className="bg-transparentDark rounded w-full max-h-60 p-3 overflow-scroll" spellCheck="false">

        </div> */}
        <UserCode
          innerChildren={
            <>
              <div>
                <Code
                  code={"const makeMove = (gameState, availaibleMoves) => {"}
                />
              </div>
              <div
                contentEditable
                suppressContentEditableWarning
                className="focus:outline-none"
              >
                <Code code={`const move = availaibleMoves[4]; return move;`} />
              </div>
              <div>
                <Code code={"}"} />
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default TicTacToe;
