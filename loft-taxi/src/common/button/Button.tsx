import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button as MuiButton } from "@material-ui/core";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";

export interface ButtonProps extends MuiButtonProps {
  text: string;
  route?: string;
  handler?: (route: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    muiButton: {
      textTransform: "none"
    }
  })
);

const Button: React.SFC<ButtonProps> = ButtonProps => {
  const classes = useStyles();
  const onClickHandler = () => {
    let { route, handler } = ButtonProps;

    route && handler && handler(route);
  };

  return (
    <MuiButton
      className={classes.muiButton}
      onClick={onClickHandler}
      {...ButtonProps}
    >
      {ButtonProps.text}
    </MuiButton>
  );
};

export default Button;
