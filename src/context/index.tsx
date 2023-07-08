import { createContext } from "react";
import useAuth from "../hooks/useAuth";

export type AuthContextData = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleLogin: () => void;
  handleLogout: () => void;
  authenticate: boolean;
};

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    authenticate,
    handleLogout,
  } = useAuth() as AuthContextData;

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleLogout,
        authenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
