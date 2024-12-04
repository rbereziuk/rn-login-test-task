import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, Pressable } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({ title, onPress, disabled }) => {
  console.log(disabled);
  return (
    <Pressable
      style={[styles.contaier, disabled && { opacity: 0.34 }]}
      onPress={onPress}
      disabled={disabled}
    >
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
  contaier: {
    width: "100%",
  },
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
