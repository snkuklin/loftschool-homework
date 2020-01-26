import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "../../common/button";
import Logo from "../../common/logo";

export interface HeaderProps {
  onButtonClick: (route: string) => void;
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

const Header: React.SFC<HeaderProps> = ({ onButtonClick }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" className={classes.header}>
      <Toolbar>
        <Typography className={classes.title}>
          <Logo />
        </Typography>
        <Button text="Карта" route="map" handler={onButtonClick}></Button>
        <Button text="Профиль" route="profile" handler={onButtonClick}></Button>
        <Button text="Выйти" route="signIn" handler={onButtonClick}></Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
