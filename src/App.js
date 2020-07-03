import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./TopBar/TopBar";
import HexList from "./HexList/HexList";
import hexes from "./common/hexes";
import HexDetail from "./HexDetail/HexDetail";

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
            <TopBar
              searchValue={searchValue}
              onSearchChange={handleSearchChange}
              onClearSearch={clearSearch}
            />
            <HexList
              hexes={hexes}
              favorites={favorites}
              filter={searchValue}
              onFavorite={handleFavorite}
              onUnfavorite={handleUnfavorite}
            />
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
