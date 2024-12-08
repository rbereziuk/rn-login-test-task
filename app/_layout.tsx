import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/services/AuthContext";

const queryClient = new QueryClient();

export default function AppLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(profile)" />
          <Stack.Screen name="home" />
          <Stack.Screen name="login" />
        </Stack>
      </AuthProvider>
    </QueryClientProvider>
  );
}
