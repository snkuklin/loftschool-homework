import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { History } from "history";
import { Link } from "react-router-dom";

interface NavigationButtonProps extends ButtonProps {
  to: History.LocationDescriptor;
  text: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    muiButton: {
      textTransform: "none"
    }
  })
);

const NavigationButton: React.FC<NavigationButtonProps> = ({
  to,
  text,
  ...rest
}) => {
  const classes = useStyles();
  const NavigationLink: React.FC<any> = React.forwardRef((props, ref) => (
    <Link to={to} ref={ref} {...props} />
  ));

  return (
    <Button className={classes.muiButton} component={NavigationLink} {...rest}>
      {text}
    </Button>
  );
};

export default NavigationButton;
