import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect, RouteProps } from "react-router-dom";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Header from "./components/header";
import Map from "./components/map";
import Profile from "./components/profile";
import { getIsLoggedIn, checkToken } from "./modules/auth";
import { getProfile } from "./modules/profile";
import "./App.css";

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...rest}>
      {isLoggedIn ? (
        <>
          <Header />
          {children}
        </>
      ) : (
        <Redirect to="/signin" />
      )}
    </Route>
  );
};

const App: React.FC = () => {
  let dispatch = useDispatch();
  dispatch(checkToken());
  let isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile());
    }
  }, [isLoggedIn, dispatch]);

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
