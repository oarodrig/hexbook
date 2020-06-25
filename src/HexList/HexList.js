import React from "react";
import HexRow from "../HexRow/HexRow";
import style from "./HexList.module.css";

const HexList = (props) => {
  const { hexes, filter } = props;

  const getRowView = () =>
    hexes
      .filter((hex) =>
        filter ? hex.name.toLowerCase().includes(filter.toLowerCase()) : true
      )
      .map((hex) => <HexRow hex={hex} key={hex.id} />);

  return (
    <div className={style.hexListContainer}>
      <ul className={style.hexList}>{getRowView()}</ul>
    </div>
  );
};

export default HexList;
