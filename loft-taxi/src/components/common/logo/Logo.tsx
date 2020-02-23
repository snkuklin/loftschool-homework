import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import BlackLogoImage from "./assets/img/logo-black.svg";
import WhiteLogoImage from "./assets/img/logo-white.svg";

export interface LogoProps {
  color?: "white" | "black";
  animate?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@keyframes fadeIn": {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    },
    logo: {
      animation: "$fadeIn 3.5s"
    }
  })
);

const Logo: React.FC<LogoProps> = ({ color = "black", animate = false }) => {
  const classes = useStyles();

  return (
    <img
      width="160"
      src={color === "white" ? WhiteLogoImage : BlackLogoImage}
      className={animate ? classes.logo : ""}
      alt="Loft Taxi"
    ></img>
  );
};

export default Logo;
