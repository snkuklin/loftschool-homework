import * as React from "react";

interface AuthContextState {
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const defaultAuthContextState: AuthContextState = {
  isLoggedIn: false,
  login: (): void => {},
  logout: (): void => {}
};

const AuthContext = React.createContext<AuthContextState>(
  defaultAuthContextState
);

const AuthProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const login = (email: string, password: string) => {
    email && password && setIsLoggedIn(true);
  };
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
