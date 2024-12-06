import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, Pressable, ActivityIndicator } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<Props> = ({
  title,
  onPress,
  disabled,
  isLoading = false,
}) => {
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
        <Text style={styles.text}>
          {isLoading ? <ActivityIndicator color={theme.colorWhite} /> : title}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contaier: {
    width: "100%",
    shadowColor: theme.colorButtonShadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  buttonGradient: {
    paddingVertical: 10,
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
