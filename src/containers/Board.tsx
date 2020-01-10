import React from "react";
import Header from "../components/Header";
import Cup from "../components/Cup";
import Ball from "../components/Ball";

const Board: React.FC = () => {
  return (
    <>
      <Header />
      <div className="Inline">
        <Cup />
      </div>
      <div className="Inline">
        <Cup />
      </div>
      <div className="Inline">
        <Cup />
      </div>

      <Ball />
    </>
  );
};

export default Board;
