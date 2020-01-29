import React from "react";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import Header from "./components/header";
import Profile from "./components/profile";
import Map from "./components/map";
import { AuthContext, AuthProvider } from "./context/auth";
import "./App.css";

interface routesMapInterface {
  [key: string]: any;
}

const routesMap: routesMapInterface = {
  signUp: (onRouteChange: any) => (
    <SignUp onSubmitAction={() => onRouteChange("map")} />
  ),
  signIn: (onRouteChange: any) => (
    <SignIn onSubmitAction={() => onRouteChange("map")} />
  ),
  profile: () => <Profile />,
  map: () => <Map />
};

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  const [currentRoute, setCurrentRoute] = React.useState("signIn");
  const {isLoggedIn} = React.useContext(AuthContext);
  const onRouteChange = (route: string, fn?: void) => {
    setCurrentRoute(route);
  };
  return (
    <div>
        {isLoggedIn ? <Header onButtonClick={onRouteChange}></Header> : null}
        {routesMap[currentRoute](onRouteChange)}
    </div>
  );
};

export default App;
