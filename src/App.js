import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./TopBar/TopBar";
import HexList from "./HexList/HexList";
import hexes from "./common/hexes";
import HexDetail from "./HexDetail/HexDetail";
import style from "./App.module.css";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const storedFavorites = localStorage.getItem("favorites");
  const [favorites, setFavorites] = useState(
    storedFavorites ? JSON.parse(storedFavorites) : []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  const handleFavorite = (hexId) => {
    setFavorites(favorites.concat(hexId));
  };

  const handleUnfavorite = (hexId) => {
    setFavorites(favorites.filter((existingHexId) => existingHexId !== hexId));
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <div className={style.listViewScreen}>
              <TopBar
                hexes={hexes}
                onFavorite={handleFavorite}
                onUnfavorite={handleUnfavorite}
                searchValue={searchValue}
                onSearchChange={handleSearchChange}
                onClearSearch={clearSearch}
                favorites={favorites}
              />
              <HexList
                className={style.hexList}
                hexes={hexes}
                favorites={favorites}
                filter={searchValue}
                onFavorite={handleFavorite}
                onUnfavorite={handleUnfavorite}
              />
            </div>
          </Route>
          <Route path="/hex/:id">
            <HexDetail hexes={hexes} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
