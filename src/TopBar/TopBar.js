import React, { useRef } from "react";
import style from "./TopBar.module.css";
import { ReactComponent as SearchSvg } from "../common/svg/search-solid.svg"; //TODO Attribution
import { ReactComponent as FilterSvg } from "../common/svg/filter-solid.svg"; //TODO Attribution
import { ReactComponent as ClearSvg } from "../common/svg/times-circle-regular.svg"; //TODO Attribution
import { ReactComponent as CardViewSvg } from "../common/svg/card-view.svg";

const TopBar = (props) => {
  const { searchValue, onSearchChange, onClearSearch } = props;
  const searchInput = useRef(null);

  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  const focusSearch = () => {
    searchInput.current.focus();
  };

  const handleClearClick = () => {
    onClearSearch();
    focusSearch();
  };

  return (
    <div className={style.bar}>
      <div className={`${style.topBarGroup} ${style.occupyAvailableWidth}`}>
        <SearchSvg
          className={`${style.icon} ${style.searchIcon}`}
          onClick={focusSearch}
        />
        <input
          value={searchValue}
          className={`${style.searchInput} ${style.occupyAvailableWidth}`}
          type="text"
          placeholder="Search Hexes"
          onChange={handleSearchChange}
          ref={searchInput}
        />
        {searchValue && (
          <button className={style.clearButton} onClick={handleClearClick}>
            <ClearSvg className={`${style.icon}`} />
          </button>
        )}
      </div>
      <div className={style.topBarGroup}>
        <button className={style.topBarButton}>
          <FilterSvg className={style.icon} />
        </button>
        <button className={style.topBarButton}>
          <CardViewSvg className={style.icon} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
