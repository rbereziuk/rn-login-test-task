import { useEffect, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Button } from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";

export default function Profile() {
  const navigation = useNavigation();
  const user = useLocalSearchParams();

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Hi, ${user.firstName} ${user.lastName}` });
  });

  const { logout, checkSession } = useAuth();

  useEffect(() => {
    const intervalId = setInterval(checkSession, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ScrollView style={styles.wrapper}>
      <Button title="Logout" type="secondary" onPress={logout} />
      <View style={styles.userData}>
        <Text>{JSON.stringify(user)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  userData: {
    marginTop: 30,
  },
});
