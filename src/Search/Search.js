import React, { useRef } from "react";
import { ReactComponent as MagnifyingGlassIcon } from "../common/svg/search-solid.svg";
import style from "./Search.module.css";
import { ReactComponent as ClearSvg } from "../common/svg/times-circle-regular.svg"; //TODO Attribution

const Search = (props) => {
  const { className, searchValue, onSearchChange, onClearSearch } = props;
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
    <div className={`${style.searchContainer} ${className || ""}`}>
      <MagnifyingGlassIcon className={style.searchIcon} />
      <input
        value={searchValue}
        type="text"
        className={style.searchInput}
        placeholder="Search Hexbook"
        onChange={handleSearchChange}
        ref={searchInput}
      />
      {searchValue && (
        <button className={style.clearButton} onClick={handleClearClick}>
          <ClearSvg className={`${style.clearIcon}`} />
        </button>
      )}
    </div>
  );
};

export default Search;
