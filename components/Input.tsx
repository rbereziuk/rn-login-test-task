import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "@/theme";

interface Props {
  placeholder: string;
  /**
   * margin bottom
   */
  mb?: number;
}

export const Input: React.FC<Props> = ({ placeholder, mb }) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTextChange = (text: string) => {
    setText(text);
  };

  return (
    <View
      style={[
        styles.wrapper,
        Boolean(mb) && { marginBottom: mb },
        isFocused && styles.focusedInput,
      ]}
    >
      {!isFocused && !text && (
        <Text style={styles.placeholder}>Enter {placeholder}</Text>
      )}
      {(isFocused || Boolean(text)) && (
        <Text style={styles.label}>{placeholder}</Text>
      )}
      <TextInput
        onFocus={handleFocus}
        onChangeText={handleTextChange}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: "#D8E2E6",
    width: "100%",
    height: 53,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingTop: 15,
  },
  placeholder: {
    fontSize: 16,
    color: "#879399",
    position: "absolute",
    left: 10,
    top: 15,
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    color: theme.colorDarkBlue,
    position: "absolute",
    left: 10,
    top: 5,
  },
  focusedInput: {
    borderColor: theme.colorDarkBlue,
  },
});
