import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Cup from "../components/Cup";
import Ball from "../components/Ball";
import Score from "../components/Score";
import { getRandomInt } from "../helpers";
import { cupsNumber } from "../constants/Cups";

const Board: React.FC = () => {
  const [score, setScore] = useState(0);
  const [board, setBoard] = useState([] as JSX.Element[]);

  const ballPosition = getRandomInt(cupsNumber);

  useEffect(() => {
    const checkBallPosition = (position: number) => {
      if (position === ballPosition) {
        setScore(score + 1);
        setBoard([]);
      }
    };
    const Board: JSX.Element[] = [];
    for (let index = 0; index < cupsNumber; index++) {
      Board.push(
        <div
          className="Inline mr-2 Container"
          onClick={() => checkBallPosition(index)}
        >
          <Cup />
          {ballPosition === index && <Ball />}
        </div>
      );
    }
    setBoard(Board);
  }, [score, ballPosition]);

  console.log(board);
  return (
    <>
      <Header />
      <Score score={score} />
      {board.length ? board : null}
    </>
  );
};

export default Board;
