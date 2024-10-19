import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginUser, RegisterUser, User } from "../models/user";

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (user: LoginUser) => void;
  logout: () => void;
  register: (user: RegisterUser) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  register: () => {},
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const currentUser = localStorage.getItem("user");

    if (token && currentUser) {
      setToken(token);
      setUser(JSON.parse(currentUser));
    } else {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, []);

  function login(userInfo: User) {
    console.log("Logging in", userInfo);
  }

  function logout() {
    console.log("Logging out");
  }

  function register(userInfo: RegisterUser) {
    console.log("Registering", userInfo);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return AuthContext;
}
