import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function LoginScreen() {
  return (
    <View style={styles.screenWrapper}>
      <StatusBar style="auto" />
      <Input placeholder="username" mb={15} />
      <Input placeholder="password" mb={15} />
      <Button title="Login" onPress={() => alert("Pressed")} />
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
});
