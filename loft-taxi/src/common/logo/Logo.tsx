import * as React from 'react';
import LogoImage from './logo.svg';

export interface LogoProps {
    
}
 
const Logo: React.SFC<LogoProps> = () => {
    return <img width="160" src={LogoImage} alt="Loft Taxi"></img>;
}
 
export default Logo;