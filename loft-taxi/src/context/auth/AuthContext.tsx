import * as React from "react";

export interface AuthProviderProps {}
export interface AuthContextProps {
  isLoggedIn: boolean;
  login: (isLoggedIn: boolean) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextProps>({
  isLoggedIn: false,
  login: (isLoggedIn: boolean) => {},
  logout: () => {}
});

const AuthProvider: React.SFC<AuthProviderProps> = props => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const login = (isLoggedIn:boolean) => setIsLoggedIn(!isLoggedIn);
  const logout = () => setIsLoggedIn(false);
  // const getProviderValue = () => {
  //   const value: AuthContextProps = {
  //     isLoggedIn: getIsLoggedIn,
  //     logout: logout,
  //     login: login
  //   };

  //   return value;
  // };
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
