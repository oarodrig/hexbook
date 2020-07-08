import React from "react";
import HexRow from "../HexRow/HexRow";
import style from "./HexList.module.css";

const HexList = (props) => {
  const {
    hexes,
    favorites,
    filter,
    onFavorite,
    onUnfavorite,
    className,
  } = props;

  const getRowView = () =>
    hexes
      .filter((hex) =>
        filter ? hex.name.toLowerCase().includes(filter.toLowerCase()) : true
      )
      .map((hex) => getRowFromHex(hex));

  const getRowFromHex = (hex) => {
    return (
      <HexRow
        hex={hex}
        key={hex.id}
        favorites={favorites}
        onFavorite={onFavorite}
        onUnfavorite={onUnfavorite}
      />
    );
  };

  return (
    <div className={`${className || ""} ${style.hexListContainer}`}>
      <ul className={style.hexList}>{getRowView()}</ul>
    </div>
  );
};

export default HexList;
