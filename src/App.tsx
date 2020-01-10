import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./containers/Board";

const App: React.FC = () => {
  return (
    <div className="App">
      <Board />
    </div>
  );
};

export default App;
