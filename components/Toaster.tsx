import { StyleSheet, Text, View, ViewStyle } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "@/theme";

interface Props {
  text: string;
  type: "error";
  style?: ViewStyle;
}

export const Toaster: React.FC<Props> = ({ text, type, style }) => {
  return (
    <View style={[styles.wrapper, style]}>
      <AntDesign name="exclamationcircleo" size={24} color={theme.colorWhite} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colorToasterError,
    width: "100%",
    borderRadius: 8,
    height: 53,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: theme.colorWhite,
    marginLeft: 10,
  },
});
