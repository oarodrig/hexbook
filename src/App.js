import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./TopBar/TopBar";
import HexList from "./HexList/HexList";
import hexes from "./common/hexes";
import HexDetail from "./HexDetail/HexDetail";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <HexList hexes={hexes} />
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
