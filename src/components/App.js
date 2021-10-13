import React from "react";
import "./App.css";
import Sidenav from "./Sidenav";
import HomePlans from "./HomePlans";
import Lots from "./Lots";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Route path="/homes" exact component={HomePlans} />
      <Route path="/lots" exact component={Lots} />
    </div>
  );
}

export default App;
