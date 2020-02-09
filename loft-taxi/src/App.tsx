import React from "react";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import Header from "./components/header";
import Profile from "./components/profile";
import Map from "./components/map";
import { AuthContext } from "./context/auth";
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

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = React.useState("signIn");
  const { isLoggedIn } = React.useContext(AuthContext);
  const onRouteChange = (route: string) => {
    setCurrentRoute(route);
  };
  return (
    <div>
      {isLoggedIn && <Header onClick={onRouteChange}></Header>}
      {routesMap[currentRoute](onRouteChange)}
    </div>
  );
};

export default App;
