import { StyleSheet, Text, View, ViewStyle } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "@/theme";

interface Props {
  text: string | undefined;
  type: "error" | "info";
  style?: ViewStyle;
}

export const Toaster: React.FC<Props> = ({ text, type, style }) => {
  return (
    <View style={[styles.wrapper, type === "error" && styles.error, style]}>
      <AntDesign name="exclamationcircleo" size={24} color={theme.colorWhite} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderRadius: 8,
    height: 53,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  error: {
    backgroundColor: theme.colorToasterError,
  },
  text: {
    color: theme.colorWhite,
    marginLeft: 10,
  },
});
