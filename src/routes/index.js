import React from "react";

//3rd party packages
import { Route, Switch } from "react-router-dom";

import { routes } from "../constants";

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ path, component }) => {
        return <Route exact path={path} component={component} />;
      })}
    </Switch>
  );
};

export default Routes;
