import React from "react";
import style from "./TopBar.module.css";
import Search from "../Search/Search";

const TopBar = (props) => {
  const { searchValue, onSearchChange, onClearSearch } = props;

  return (
    <>
      <header className={style.title}>Hexbook</header>
      <Search
        className={style.searchBar}
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        onClearSearch={onClearSearch}
      />
    </>
  );
};

export default TopBar;
