import { createContext } from "react";
import useAuth from "../hooks/useAuth";

export type AuthContextData = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleLogin: () => void;
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
  const { email, setEmail, password, setPassword, handleLogin, authenticate } =
    useAuth() as AuthContextData;

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        authenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
