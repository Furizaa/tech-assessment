import * as React from "react";
import { Provider } from "react-redux";

import store from "./store";
import { Router } from "./Router";

export const App: React.StatelessComponent<any> = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
