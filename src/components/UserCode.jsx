import React from "react";

const UserCode = ({ innerChildren }) => {
  return (
    <>
      <div
        className="bg-transparentDark rounded w-full max-h-60 p-3 overflow-scroll custom-scrollbar"
        spellCheck="false"
      >
        {innerChildren}
      </div>
    </>
  );
};

export default UserCode;
