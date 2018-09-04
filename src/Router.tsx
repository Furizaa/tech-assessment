import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./views/Home/Home";
import { CounterResult } from "./views/CounterResult/CounterResult";

export const Router: React.StatelessComponent<any> = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/result" component={CounterResult} />
    </React.Fragment>
  </BrowserRouter>
);
