import React from "react";
import Header from "../components/Header";
import Cup from "../components/Cup";
import Ball from "../components/Ball";
import Score from "../components/Score";

const Board: React.FC = () => {
  return (
    <>
      <Header />
      <Score />
      <div className="Inline mr-2">
        <Cup />
      </div>
      <div className="Inline mr-2">
        <Cup />
      </div>
      <div className="Inline mr-2">
        <Cup />
      </div>

      <Ball />
    </>
  );
};

export default Board;
