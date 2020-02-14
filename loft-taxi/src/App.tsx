import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps
} from "react-router-dom";
import SignIn from "./components/signIn";
import Main from "./components/main";
import { getIsLoggedIn } from "./modules/signIn";
import { LoginState } from "./modules/signIn/reducer";
import "./App.css";

interface PrivateRouteProps extends RouteProps {
  isLoggedIn: boolean;
}

const PrivateRoute = ({
  isLoggedIn,
  component,
  ...rest
}: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={() => {
        return isLoggedIn ? <Main /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: LoginState) => getIsLoggedIn(state));
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/map" isLoggedIn={isLoggedIn} />
        <Route exact path="/login" component={SignIn} />
        <Redirect path="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
