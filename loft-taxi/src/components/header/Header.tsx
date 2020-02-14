import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavigationButton from "../../common/button/navigation";
import SimpleButton from "../../common/button/simple";
import Logo from "../../common/logo";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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
  const doLogout = () => {};

  return (
    <AppBar position="static" color="default" className={classes.header}>
      <Toolbar>
        <Typography className={classes.title}>
          <Logo />
        </Typography>
        <NavigationButton to="/map" text="Карта"></NavigationButton>
        <NavigationButton to="/profile" text="Профиль"></NavigationButton>
        <SimpleButton text="Выйти" onButtonClick={doLogout}></SimpleButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
