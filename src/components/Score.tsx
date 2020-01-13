import React from "react";

interface IProps {
  score: number;
}

const Score = (props: IProps) => {
  const { score } = props;
  return (
    <>
      <h4>Score: </h4>
      <p>{score}</p>
    </>
  );
};

export default Score;
