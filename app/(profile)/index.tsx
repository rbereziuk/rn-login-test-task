import { Button } from "@/components/Button";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.wrapper}>
      <Button title="Logout" onPress={() => alert("Pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});
