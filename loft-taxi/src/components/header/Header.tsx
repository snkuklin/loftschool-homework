import * as React from "react";
import Button from "../../common/button";

export interface HeaderProps {
  onButtonClick: (route: string) => void;
}

const Header: React.SFC<HeaderProps> = ({ onButtonClick }) => {
  return (
    <div>
      <span>Loft Taxi</span>
      <Button text="Карта" route="map" handler={onButtonClick}></Button>
      <Button text="Профиль" route="profile" handler={onButtonClick}></Button>
      <Button text="Выйти" route="signIn" handler={onButtonClick}></Button>
    </div>
  );
};

export default Header;
