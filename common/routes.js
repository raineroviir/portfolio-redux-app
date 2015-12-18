import { Route, IndexRoute } from "react-router";
import React from "react";

import App from "./containers/App";

//Redux Smart
import HomePage from "./containers/HomePage";

//Redux Dumb
import PortfolioPage from "./components/Portfolio";
import error404 from "./components/404";

export default (
  <Route name="app" path="/" component={App}>
    <IndexRoute component={PortfolioPage} />
      <Route path="home" component={HomePage} />
      <Route path="portfolio" component={PortfolioPage} />
      <Route path="*" component={error404}/>
  </Route>
);
