import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useContext, useState } from "react";
import { Toaster } from "@/components/Toaster";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/api/login-user";
import { useRouter, useNavigation } from "expo-router";
import { SignInContext } from "./_layout";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    username: false,
    password: false,
  });
  const [, setIsSignIn] = useContext(SignInContext);

  const router = useRouter();
  const navigation = useNavigation();

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: () => loginUser(username, password),
    onSuccess: (data) => {
      setIsSignIn(true);
      router.push({ pathname: "/", params: data });
    },
  });

  const handleLogin = () => {
    const isUserError = username.length > 3 ? false : true;
    const isPasswordError = password.length > 3 ? false : true;

    setError({
      username: isUserError,
      password: isPasswordError,
    });

    if (isUserError || isPasswordError) return;

    mutation.mutate();
  };

  return (
    <View style={styles.screenWrapper}>
      <StatusBar style="auto" />
      <Input
        value={username}
        placeholder="username"
        onTextChange={setUsername}
        isError={error.username}
        mb={15}
      />
      <Input
        value={password}
        placeholder="password"
        onTextChange={setPassword}
        isError={error.password}
        mb={15}
        secureTextEntry={true}
      />
      {mutation.isError && (
        <Toaster
          text={mutation.failureReason?.message}
          type="error"
          style={styles.toaster}
        />
      )}
      <Button
        title="Login"
        onPress={handleLogin}
        disabled={!Boolean(username)}
        isLoading={mutation.isPending}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  toaster: {
    marginBottom: 15,
  },
});
