import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect, RouteProps } from "react-router-dom";
import SignIn from "./containers/auth/signIn";
import SignUp from "./containers/auth/signUp";
import Header from "./components/header";
import Map from "./containers/map";
import Profile from "./containers/profile";
import { getIsLoggedIn, checkToken } from "./containers/auth/store";
import { getProfile } from "./containers/profile/store";
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
  let isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

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
