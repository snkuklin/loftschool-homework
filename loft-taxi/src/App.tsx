import React from "react";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import Header from "./components/header";
import Profile from "./components/profile";
import Map from "./components/map";
import { AuthContext } from "./context/auth";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps
} from "react-router-dom";
import "./App.css";

interface routesMapInterface {
  [key: string]: any;
}

const routesMap: routesMapInterface = {
  signUp: (onRouteChange: any) => (
    <SignUp onSubmit={() => onRouteChange("map")} />
  ),
  signIn: (onRouteChange: any) => (
    <SignIn onSubmit={() => onRouteChange("map")} />
  ),
  profile: () => <Profile />,
  map: () => <Map />
};

interface PrivateRouterProps extends RouteProps {
  isLoggedIn: boolean;
}

const PrivateRouter = ({
  isLoggedIn,
  component,
  ...rest
}: PrivateRouterProps) => {
  return (
    <Route
      {...rest}
      render={props => {
        return isLoggedIn ? component : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = React.useState("signIn");
  const { isLoggedIn } = React.useContext(AuthContext);
  const onRouteChange = (route: string) => {
    setCurrentRoute(route);
  };
  return (
    <BrowserRouter>
      <Switch>
        {/* <Redirect from="/" to="/login"></Redirect> */}
        <PrivateRouter path="/app" isLoggedIn={isLoggedIn}></PrivateRouter>
        <Route path="/login" component={SignIn} />
      </Switch>
      {/* <div>
        {isLoggedIn && <Header onClick={onRouteChange}></Header>}
        {routesMap[currentRoute](onRouteChange)}
      </div> */}
    </BrowserRouter>
  );
};

export default App;
