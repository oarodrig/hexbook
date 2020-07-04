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
      .map((hex) => getRowFromHex(hex, false));

  const getFavorites = () =>
    hexes
      .filter((hex) => favorites.includes(hex.id))
      .map((hex) => getRowFromHex(hex, true));

  const getRowFromHex = (hex, isFavorite = false) => {
    return (
      <HexRow
        hex={hex}
        key={hex.id}
        favorites={favorites}
        onFavorite={onFavorite}
        onUnfavorite={onUnfavorite}
        condensed={isFavorite}
      />
    );
  };

  return (
    <div className={className || ""}>
      <ul className={style.hexList}>{getRowView()}</ul>
    </div>
  );
};

export default HexList;
