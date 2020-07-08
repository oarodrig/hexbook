import React from "react";
import HexRow from "../HexRow/HexRow";
import style from "./FavoriteHexes.module.css";
import { ReactComponent as SolidStarIcon } from "../common/svg/star-solid.svg";
import { ReactComponent as CloseIcon } from "../common/svg/times-circle-regular.svg";

const FavoriteHexes = ({
  hexes,
  favorites,
  onFavorite,
  onUnfavorite,
  onClose,
}) => {
  const getHexListItems = () =>
    hexes
      .filter((hex) => favorites.includes(hex.id))
      .map((hex) => getRowFromHex(hex, false));

  const getRowFromHex = (hex) => {
    return (
      <HexRow
        hex={hex}
        key={hex.id}
        favorites={favorites}
        onFavorite={onFavorite}
        onUnfavorite={onUnfavorite}
        condensed
      />
    );
  };

  return (
    <div className={style.favorites}>
      <div className={style.headerContainer}>
        <h3 className={style.title}>Favorites</h3>
        <button
          onClick={onClose}
          className={`icon-button ${style.closeButton}`}
        >
          <CloseIcon className={`button-icon-small ${style.closeButtonIcon}`} />
        </button>
      </div>
      {!!favorites.length ? (
        <ul>{getHexListItems()}</ul>
      ) : (
        <div className={style.emptyState}>
          <SolidStarIcon className={style.placeholderIcon} />
          <h4 className={style.placeholderTitle}>No favorites selected</h4>
          <p className={style.placeholderDescription}>
            Select the star on a hex to add it to your favorites.
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoriteHexes;
