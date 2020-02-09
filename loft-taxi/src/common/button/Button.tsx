import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button as MuiButton } from "@material-ui/core";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";

export interface ButtonProps {
  text: string;
  route?: string;
  onButtonClick?: (route: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    muiButton: {
      textTransform: "none"
    }
  })
);

const Button: React.FC<ButtonProps & MuiButtonProps> = Props => {
  const classes = useStyles();
  const { onButtonClick, route, text, ...muiButtonProps } = Props;
  const onClick = () => {
    route && onButtonClick && onButtonClick(route);
  };

  return (
    <MuiButton
      className={classes.muiButton}
      onClick={onClick}
      {...muiButtonProps}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
