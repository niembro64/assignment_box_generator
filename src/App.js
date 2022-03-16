import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Box from "./components/Box";

function App() {
  const [group, setGroup] = useState(["magenta","cyan","yellow"]);
  const [form, setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setGroup([...group, form]);
    setForm("");
  };

  return (
    <div className="App">
      <h1>Make Some Boxes</h1>
      <form id="top" onSubmit={onSubmitHandler}>
        <label>New Box Color: </label>
        <input
          type="text"
          value={form}
          onChange={(event) => setForm(event.target.value)}
        />
        <button type="submit" className="btn btn-primary mx-4">
          Add Box
        </button>
      </form>

      <div id="boxes">
        {group.map((item, i) => {
          return <Box key={i} color={item} />;
        })}
        {/* <Box key={3} color="pink" />
        <Box color="cyan" />
        <Box color="orange" />
        <Box color="red" />
      <Box color="yellow" /> */}
      </div>
    </div>
  );
}

export default App;
