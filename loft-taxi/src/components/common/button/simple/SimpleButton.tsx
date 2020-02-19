import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export interface SimpleButtonProps extends ButtonProps {
  text: string;
  onButtonClick?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    muiButton: {
      textTransform: "none"
    }
  })
);

const SimpleButton: React.SFC<SimpleButtonProps> = ({
  text,
  onButtonClick,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Button className={classes.muiButton} onClick={onButtonClick} {...rest}>
      {text}
    </Button>
  );
};

export default SimpleButton;
