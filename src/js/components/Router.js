import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={App}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
