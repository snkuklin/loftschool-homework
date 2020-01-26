import React from "react";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import Header from "./components/header";
import Profile from "./components/profile";
import Map from "./components/map";
import "./App.css";

interface routesMapInterface {
  [key: string]: any; // may be a different type?
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

class App extends React.Component {
  state = {
    currentRoute: "signUp"
  };
  onRouteChange = (route: string) => {
    this.setState({ currentRoute: route });
  };
  render() {
    const { currentRoute } = this.state;
    return (
      <div>
        <Header onButtonClick={this.onRouteChange}></Header>
        {routesMap[currentRoute](this.onRouteChange)}
      </div>
    );
  }
}
export default App;
