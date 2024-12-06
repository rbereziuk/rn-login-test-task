import { Redirect, Stack } from "expo-router";
import { useContext } from "react";
import { SignInContext } from "../_layout";

export default function ProfileLayout() {
  const [isSignIn] = useContext(SignInContext);

  if (!isSignIn) {
    return <Redirect href="/home" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
