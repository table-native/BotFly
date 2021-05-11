import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = (props) => {
  return (
    <>
      <SyntaxHighlighter language="javascript" style={nightOwl}>
        {props.code}
      </SyntaxHighlighter>
    </>
  );
};

export default Code;
