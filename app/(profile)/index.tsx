import { Button } from "@/components/Button";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Profile() {
  const navigation = useNavigation();
  const user = useLocalSearchParams();

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Hi, ${user.firstName} ${user.lastName}` });
  });

  return (
    <ScrollView style={styles.wrapper}>
      <Button
        title="Logout"
        type="secondary"
        onPress={() => alert("Pressed")}
      />
      <Text>{JSON.stringify(user)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
});
