import React from "react";
import CupImage from "../images/cup.png";
import Slide from "react-reveal/Slide";

const Cup: React.FC = () => {
  return (
    <>
      <Slide className="mt-2 Cup" top>
        <img src={CupImage} alt="cup" />
      </Slide>
    </>
  );
};

export default Cup;
