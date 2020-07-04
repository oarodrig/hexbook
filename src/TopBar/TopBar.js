import React from "react";
import style from "./TopBar.module.css";
import Search from "../Search/Search";

const TopBar = (props) => {
  const { searchValue, onSearchChange, onClearSearch } = props;

  return (
    <div className={style.topBarContainer}>
      <header className={style.title}>Hexbook</header>
      <Search
        className={style.searchBar}
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        onClearSearch={onClearSearch}
      />
    </div>
  );
};

export default TopBar;
