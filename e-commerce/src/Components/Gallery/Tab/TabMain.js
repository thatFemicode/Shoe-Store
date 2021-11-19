import React from "react";
import { useState } from "react";
import { items } from "./data";
import { TabStyled } from "./TabStyled";
import Converse from "./Converse/Converse";
import Nb from "./NB/Nb";
import Pg from "./PG/Pg";
const TabMain = () => {
  const [info, setInfo] = useState(items);
  const [value, setValue] = useState(info[0]);
  const renderData = () => {
    if (value === info[0]) {
      return <Converse info={info[0]} />;
    } else if (value === info[1]) {
      return <Nb info={info[1]} />;
    } else if (value === info[2]) {
      return <Pg info={info[2]} />;
    }
  };
  return (
    <TabStyled>
      <div className="btn-con">
        {items.map((item, index) => {
          return (
            <button
              className="tabs-btn"
              onClick={() => {
                setValue(info[index]);
                // console.log(info[index]);
              }}
              key={item.id}
            >
              <img src={item.img} alt="" />
            </button>
          );
        })}
      </div>
      <div className="details-con">{renderData()}</div>
    </TabStyled>
  );
};

export default TabMain;
