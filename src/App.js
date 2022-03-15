import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <Box coo="green" />
      <Box coo="blue" />
      <Box coo="orange" />
      <Box coo="red" />
      <Box coo="yellow" />
    </div>
  );
}

export default App;
