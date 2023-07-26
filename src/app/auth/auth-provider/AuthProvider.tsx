import React, { FC, ReactNode, useState } from "react";
import { fakeAuthProvider } from "../auth";
import { AuthContextType } from "./auth-provider.interface";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
