import React from "react";
import { ConverseStyled } from "./ConverseStyled";
const Converse = ({ info }) => {
    const {img} = info
  console.log(info);
  return <ConverseStyled>
      <img src={img} alt="" />
  </ConverseStyled>
};

export default Converse;
