import React from "react";
import HexRow from "../HexRow/HexRow";
import style from "./HexList.module.css";

const HexList = (props) => {
  const { hexes } = props;

  const getRowView = () => hexes.map((hex) => <HexRow hex={hex} />);

  return (
    <div className={style.hexListContainer}>
      <ul className={style.hexList}>{getRowView()}</ul>
    </div>
  );
};

export default HexList;
