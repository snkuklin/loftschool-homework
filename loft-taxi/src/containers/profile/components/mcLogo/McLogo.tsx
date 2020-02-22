import React from "react";
import MCLogoImage from "./assets/img/mc_logo.svg";

interface McLogoProps {
  className?: string;
}

const McLogo: React.FC<McLogoProps> = ({ className }) => {
  return (
    <img width="30" className={className} src={MCLogoImage} alt="MasterCard" />
  );
};

export default McLogo;
