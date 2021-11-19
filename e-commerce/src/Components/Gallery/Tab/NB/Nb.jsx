import React from "react";
import { NbStyled } from "./NbStyled";
const Nb = ({ info }) => {
  const { img } = info;
  return (
    <NbStyled>
      <img src={img} alt="" />
    </NbStyled>
  );
};

export default Nb;
