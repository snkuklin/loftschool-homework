import React from "react";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import Header from "./components/header";
import Profile from "./components/profile";
import Map from "./components/map";
import { AuthProvider } from "./context/auth";
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

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = React.useState("signIn");
  const onRouteChange = (route: string) => {
    setCurrentRoute(route);
  };
  return (
    <div>
      <AuthProvider>
        <Header onButtonClick={onRouteChange}></Header>
        {routesMap[currentRoute](onRouteChange)}
      </AuthProvider>
    </div>
  );
};

export default App;
