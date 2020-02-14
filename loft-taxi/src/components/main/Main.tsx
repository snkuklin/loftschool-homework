import React from "react";
import Header from "../header";
import Map from "../map";
import Profile from "../profile";
import { Switch, Route, Redirect } from "react-router-dom";

export interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div>
      <Header onClick={() => null} />
      <Switch>
        <Route exact path="/map" component={Map} />
        <Route exact path="/profile" component={Profile} />
        <Redirect path="/*" to="/map" />
      </Switch>
    </div>
  );
};

export default Main;
