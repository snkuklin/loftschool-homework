import React from "react";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import Header from "./components/header";
import Profile from "./components/profile";
import Map from "./components/map";
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
  const [currentRoute, setCurrentRoute] = React.useState("signUp");
  const onRouteChange = (route: string) => {
    setCurrentRoute(route);
  };
  return (
    <div>
      <Header onButtonClick={onRouteChange}></Header>
      {routesMap[currentRoute](onRouteChange)}
    </div>
  );
};

export default App;
