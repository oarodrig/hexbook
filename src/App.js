import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./TopBar/TopBar";
import HexList from "./HexList/HexList";
import hexes from "./common/hexes";
import HexDetail from "./HexDetail/HexDetail";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="App">
      <TopBar
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onClearSearch={clearSearch}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <HexList hexes={hexes} filter={searchValue} />
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
