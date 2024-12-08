import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useState } from "react";

export const AuthContext = createContext<{
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  login: <T extends {}>(data?: T) => void;
  logout: () => void;
  checkSession: () => Promise<boolean | undefined>;
}>();

export function AuthProvider(props: PropsWithChildren) {
  const [isSignIn, setIsSignIn] = useState(false);

  const router = useRouter();

  const login = <T extends {}>(userData?: T) => {
    setIsSignIn(true);
    router.push({ pathname: "/", params: userData });
  };

  const logout = () => {
    setIsSignIn(false);
    router.dismissAll();
    router.replace("/");
  };

  const checkSession = async () => {
    try {
      const response = await fetch("API_ENDPOINT/validate-session", {
        headers: {
          Authorization: `Bearer SESSION_TOKEN`,
        },
      });

      if (!response.ok) {
        logout();
        return false;
      }
    } catch (error) {
      console.error("Session check error: ", error);
      logout();
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ isSignIn, setIsSignIn, login, logout, checkSession }}
      {...props}
    />
  );
}
