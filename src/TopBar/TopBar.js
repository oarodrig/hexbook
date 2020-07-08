import React, { useState } from "react";
import style from "./TopBar.module.css";
import Search from "../Search/Search";
import FavoriteHexes from "../FavoriteHexes/FavoriteHexes";
import { ReactComponent as FavoriteIcon } from "../common/svg/star-solid.svg";

const TopBar = ({
  searchValue,
  onSearchChange,
  onClearSearch,
  favorites,
  hexes,
  onFavorite,
  onUnfavorite,
}) => {
  const [areFavoritesOpen, setAreFavoritesOpen] = useState(false);

  return (
    <div className={style.topBarContainer}>
      <header className={style.title}>
        <span>Hexbook</span>
      </header>
      <div className={style.utilBar}>
        <Search
          className={style.searchBar}
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          onClearSearch={onClearSearch}
        />
        <button
          class={`icon-button ${style.favoritesButton}`}
          onClick={() => setAreFavoritesOpen(!areFavoritesOpen)}
        >
          <FavoriteIcon className={style.favoritesIcon} />
        </button>
        {areFavoritesOpen && (
          <div
            className={`${style.favoritesContainer} ${style.hasTopRightNubbin}`}
          >
            <div style={{ backgroundColor: "white" }}>
              <FavoriteHexes
                hexes={hexes}
                favorites={favorites}
                onFavorite={onFavorite}
                onUnfavorite={onUnfavorite}
                onClose={() => setAreFavoritesOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
