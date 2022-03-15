import { useState } from "react";

const Box = (props) => {
  const [color, setColor] = useState("red");

  return (
    <div className="box">
      <h1>Box</h1>
    </div>
  );
};

export default Box;
