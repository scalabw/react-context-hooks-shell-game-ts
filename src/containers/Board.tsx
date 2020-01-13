import React, { useState } from "react";
import Header from "../components/Header";
import Cup from "../components/Cup";
import Ball from "../components/Ball";
import Score from "../components/Score";

const Board: React.FC = () => {
  const [score, setScore] = useState(0);

  return (
    <>
      <Header />
      <Score score={score} />
      <div className="Inline mr-2 Container">
        <Cup />
        <Ball />
      </div>
      <div className="Inline mr-2">
        <Cup />
      </div>
      <div className="Inline mr-2">
        <Cup />
      </div>
    </>
  );
};

export default Board;
