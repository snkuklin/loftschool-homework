import * as React from "react";

export interface ButtonProps {
  text: string;
  route?: string;
  handler?: (route: string) => void;
}

const Button: React.SFC<ButtonProps> = ({ text, route, handler }) => {
  return (
    <button onClick={() => route && handler && handler(route)}>{text}</button>
  );
};

export default Button;
