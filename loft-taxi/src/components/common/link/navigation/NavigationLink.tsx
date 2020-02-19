import React from "react";
import { History } from "history";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@material-ui/core";

export interface NavigationLinkProps {
  to: History.LocationDescriptor;
  text: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  to,
  text,
  ...rest
}) => {
  const routeLink: React.FC<any> = React.forwardRef((props, ref) => (
    <RouterLink to={to} ref={ref} {...props} />
  ));
  return (
    <MuiLink component={routeLink} {...rest}>
      {text}
    </MuiLink>
  );
};

export default NavigationLink;
