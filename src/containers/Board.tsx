import React from "react";
import Header from "../components/Header";
import Cup from "../components/Cup";
import Ball from "../components/Ball";

const Board: React.FC = () => {
  return (
    <>
      <Header />
      <Cup />
      <Cup />
      <Cup />
      <Ball />
    </>
  );
};

export default Board;
