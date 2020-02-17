import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect, RouteProps } from "react-router-dom";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Header from "./components/header";
import Map from "./components/map";
import Profile from "./components/profile";
import { getIsLoggedIn } from "./modules/auth";
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
        <Redirect to="/signin" />
      )}
    </Route>
  );
};

const App: React.FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/signin" />
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
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
