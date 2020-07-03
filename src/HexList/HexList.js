import React from "react";
import HexRow from "../HexRow/HexRow";
import style from "./HexList.module.css";

const HexList = (props) => {
  const { hexes, favorites, filter, onFavorite, onUnfavorite } = props;

  const getRowView = () =>
    hexes
      .filter((hex) =>
        filter ? hex.name.toLowerCase().includes(filter.toLowerCase()) : true
      )
      .map(getRowFromHex);

  const getFavorites = () =>
    hexes.filter((hex) => favorites.includes(hex.id)).map(getRowFromHex);

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
    <div className={style.hexListContainer}>
      {!!favorites.length && (
        <>
          <h3>Favorites</h3>
          <ul className={`${style.hexList} ${style.favoritesContainer}`}>
            {getFavorites()}
          </ul>
        </>
      )}
      <ul className={style.hexList}>{getRowView()}</ul>
    </div>
  );
};

export default HexList;
