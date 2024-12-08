import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/hooks/useAuth";

export default function ProfileLayout() {
  const { isSignIn } = useAuth();

  if (!isSignIn) {
    return <Redirect href="/home" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
