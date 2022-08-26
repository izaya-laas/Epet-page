import React from "react";
import ImageUnderWorking from "../components/ImageUnderWorking";
import Main from "../components/Main";
import Subtitle from "../components/Subtitle";

const UnderWorking = () => {
  return (
    <Main>
      <Subtitle className="no-underline mb-4">Bajo Trabajo</Subtitle>
      <ImageUnderWorking />
    </Main>
  );
};

export default UnderWorking;
