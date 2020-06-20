import React from "react";
import style from "./TopBar.module.css";
import { ReactComponent as SearchSvg } from "../common/svg/search-solid.svg"; //TODO Attribution
import { ReactComponent as FilterSvg } from "../common/svg/filter-solid.svg"; //TODO Attribution
import { ReactComponent as CardViewSvg } from "../common/svg/card-view.svg";

const TopBar = () => {
  return (
    <div className={style.bar}>
      <div className={`${style.topBarGroup} ${style.occupyAvailableWidth}`}>
        <button className={style.topBarButton}>
          <SearchSvg className={style.buttonIcon} />
        </button>
        <input
          className={`${style.searchInput} ${style.occupyAvailableWidth}`}
          type="text"
          placeholder="Search Hexes"
        />
      </div>
      <div className={style.topBarGroup}>
        <button className={style.topBarButton}>
          <FilterSvg className={style.buttonIcon} />
        </button>
        <button className={style.topBarButton}>
          <CardViewSvg className={style.buttonIcon} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
