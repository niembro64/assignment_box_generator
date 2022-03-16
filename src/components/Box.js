import { useState } from "react";
import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { render } from "@testing-library/react";

const Box = (props) => {
  const colorStyle = {
    backgroundColor: props.color,
  };

  return (
    <div className="box" style={colorStyle}>
      <h1>Box</h1>
      <h2>{props.color}</h2>
      <h3>{props.key}</h3>
    </div>
  );
};

export default Box;
