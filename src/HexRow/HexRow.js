import React from "react";
import style from "./HexRow.module.css";
import { Link } from "react-router-dom";
import getTypeBadges from "../common/typeBadgeFactory";
import { ReactComponent as EmptyStarIcon } from "../common/svg/star-regular.svg";
import { ReactComponent as SolidStarIcon } from "../common/svg/star-solid.svg";

const HexRow = (props) => {
  const {
    hex,
    favorites = [],
    onFavorite = () => {},
    onUnfavorite = () => {},
    condensed = false,
  } = props;

  const isFavorite = favorites.includes(hex.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnfavorite(hex.id);
    } else {
      onFavorite(hex.id);
    }
  };

  return (
    <li
      key={hex.id}
      className={`${style.row} ${condensed ? style.condensed : ""}`}
    >
      <Link to={`hex/${hex.id}`} className={style.hexLink}>
        <div className={style.hexName}>{hex.name}</div>
        {!condensed && (
          <div className={style.badgeContainer}>{getTypeBadges(hex.types)}</div>
        )}
      </Link>
      <button className={style.favoriteButton} onClick={toggleFavorite}>
        {isFavorite ? (
          <SolidStarIcon
            className={`${style.favoriteIcon} ${style.favoriteSelected}`}
          />
        ) : (
          <EmptyStarIcon
            className={`${style.favoriteIcon} ${style.favoriteUnselected}`}
          />
        )}
      </button>
    </li>
  );
};

export default HexRow;
