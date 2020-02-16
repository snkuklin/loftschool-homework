import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect, RouteProps } from "react-router-dom";
import SignIn from "./components/signIn";
import Header from "./components/header";
import Map from "./components/map";
import Profile from "./components/profile";
import { getIsLoggedIn } from "./modules/signIn";
import "./App.css";

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...rest}>
      {isLoggedIn ? (
        <div>
          <Header />
          {children}
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
};

const App: React.FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login">
        <SignIn />
      </Route>
      <PrivateRoute path="/map">
        <Map />
      </PrivateRoute>
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
      <Redirect to="/404" />
    </Switch>
  );
};

export default App;
