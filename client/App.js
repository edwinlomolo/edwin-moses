import React from "react";
import { withRouter, Route } from "react-router-dom";

import HomePage from "./component/pages/HomePage";

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
  </div>
);

export default withRouter(App);
