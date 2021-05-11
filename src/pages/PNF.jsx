import React from "react";
import { useLocation } from "react-router";

const PNF = () => {
  const path = useLocation().pathname;
  return (
    <>
      <div className="grid place-items-center text-center h-3/4">
        <div>
          <h1 className="text-8xl">404</h1>
          <h1>No Page with path {path} found</h1>
        </div>
      </div>
    </>
  );
};

export default PNF;
