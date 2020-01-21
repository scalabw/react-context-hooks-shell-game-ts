import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Cup from "../components/Cup";
import Ball from "../components/Ball";
import Score from "../components/Score";
import { getRandomNumberInRange } from "../helpers";
import { cupsNumber } from "../constants/Cups";

const Board: React.FC = () => {
  const [score, setScore] = useState(0);
  const [board, setBoard] = useState([] as JSX.Element[]);
  // generate randomly the first Ball position
  const [ballPosition, setBallPosition] = useState(
    getRandomNumberInRange(cupsNumber)
  );

  const randomizeBallPosition = () => {
    setBallPosition(getRandomNumberInRange(cupsNumber));
  };
  useEffect(() => {
    // check if the user Clicked on the Good cup
    const checkBallPosition = (position: number) => {
      if (position === ballPosition) {
        setScore(score + 1);
        setBoard([]);
      }
    };

    // Randomize the ball position
    const randomizeBallPosition = () => {
      setBallPosition(getRandomNumberInRange(cupsNumber));
    };

    randomizeBallPosition();
    // Generate the Board with the Defined number of Cups and put the Ball inside one of them
    const Board: JSX.Element[] = [];
    for (let index = 0; index < cupsNumber; index++) {
      Board.push(
        <div
          className="Inline mr-2 Container"
          onClick={() => checkBallPosition(index)}
          key={index}
        >
          <div className="CupImage">
            <Cup />
          </div>
          {ballPosition === index && <Ball />}
        </div>
      );
    }
    setBoard(Board);
  }, [score, ballPosition]);

  console.log(ballPosition);
  return (
    <>
      <Header />
      <Score score={score} />
      {board.length ? board : null}
    </>
  );
};

export default Board;
