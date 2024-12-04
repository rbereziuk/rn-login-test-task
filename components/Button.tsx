import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, Pressable } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ title, onPress }) => {
  return (
    <Pressable style={{ width: "100%" }} onPress={onPress}>
      <LinearGradient
        colors={[theme.colorDarkBlue, theme.colorLightBlue]}
        style={styles.buttonGradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonGradient: {
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
    borderRadius: 80,
  },
  text: {
    color: theme.colorWhite,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Noto Sans", // TODO: check fonts
  },
});
