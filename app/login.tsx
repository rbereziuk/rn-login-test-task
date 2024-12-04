import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useState } from "react";
import { Toaster } from "@/components/Toaster";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    username: false,
    password: false,
  });

  const handleLogin = () => {
    setError({
      username: username.length > 3 ? false : true,
      password: password.length > 3 ? false : true,
    });
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
      />
      <Toaster
        text="user emil doesn't exist"
        type="error"
        style={styles.toaster}
      />
      <Button
        title="Login"
        onPress={handleLogin}
        disabled={!Boolean(username)}
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
