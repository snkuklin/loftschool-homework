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

  return (
    <MuiButton
      className={classes.muiButton}
      type={ButtonProps.type}
      variant={ButtonProps.variant}
      color={ButtonProps.color}
      onClick={() =>
        ButtonProps.route &&
        ButtonProps.handler &&
        ButtonProps.handler(ButtonProps.route)
      }
    >
      {ButtonProps.text}
    </MuiButton>
  );
};

export default Button;
