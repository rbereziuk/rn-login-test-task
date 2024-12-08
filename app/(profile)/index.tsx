import { Button } from "@/components/Button";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useContext, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SignInContext } from "../_layout";

export default function Profile() {
  const router = useRouter();
  const navigation = useNavigation();
  const user = useLocalSearchParams();

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Hi, ${user.firstName} ${user.lastName}` });
  });

  const [, setIsSignIn] = useContext(SignInContext);

  const handleLogout = () => {
    setIsSignIn(false);
    router.dismissAll();
    router.replace("/");
  };

  return (
    <ScrollView style={styles.wrapper}>
      <Button title="Logout" type="secondary" onPress={handleLogout} />
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
