import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "../../common/button";
import Logo from "../../common/logo";
import { AuthContext } from "../../context/auth";

export interface HeaderProps {
  onClick: (route: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: "#ffffff"
    },
    title: {
      flexGrow: 1,
      lineHeight: "normal"
    }
  })
);

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  const classes = useStyles();
  const { logout } = React.useContext(AuthContext);
  const doLogout = (route: string) => {
    logout();
    onClick(route);
  };

  return (
    <AppBar position="static" color="default" className={classes.header}>
      <Toolbar>
        <Typography className={classes.title}>
          <Logo />
        </Typography>
        <Button text="Карта" route="map" onButtonClick={onClick}></Button>
        <Button text="Профиль" route="profile" onButtonClick={onClick}></Button>
        <Button text="Выйти" route="signIn" onButtonClick={doLogout}></Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
