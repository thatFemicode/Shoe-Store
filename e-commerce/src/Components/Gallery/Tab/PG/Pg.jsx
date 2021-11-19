import React from "react";
import { PgStyled } from "./PgStyled";
const Pg = ({ info }) => {
  const { img } = info;
  return (
    <PgStyled>
      <img src={img} alt="" />
    </PgStyled>
  );
};

export default Pg;
