import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <Box color="green" />
      <Box color="blue" />
      <Box color="orange" />
      <Box color="red" />
      <Box color="yellow" />
    </div>
  );
}

export default App;
