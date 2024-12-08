import { useAuth } from "@/hooks/useAuth";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";

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
