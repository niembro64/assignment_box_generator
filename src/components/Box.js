import { useState } from "react";
import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { render } from "@testing-library/react";

const Box = (props) => {

  const colorStyle = {
    backgroundColor: props.coo,
  };

  return (
    <div className="box" style={colorStyle}>
      <h1>Box</h1>
      <h2>{props.coo}</h2>
    </div>
  );
};

export default Box;
