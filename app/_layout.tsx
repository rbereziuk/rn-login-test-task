import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";

export const SignInContext =
  createContext<
    [
      isSignIn: boolean,
      setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>,
    ]
  >();

const queryClient = new QueryClient();

export default function AppLayout() {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <SignInContext.Provider value={[isSignIn, setIsSignIn]}>
        <Stack>
          <Stack.Screen name="(profile)" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
      </SignInContext.Provider>
    </QueryClientProvider>
  );
}
