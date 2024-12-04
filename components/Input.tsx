import { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "@/theme";

interface Props {
  value: string;
  onTextChange: Dispatch<SetStateAction<string>>;
  placeholder: string;
  isError?: boolean;
  /**
   * margin bottom
   */
  mb?: number;
}

export const Input: React.FC<Props> = ({
  value,
  onTextChange,
  placeholder,
  isError,
  mb,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTextChange = (text: string) => {
    onTextChange(text);
  };

  return (
    <View style={[styles.container, Boolean(mb) && { marginBottom: mb }]}>
      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.focusedInput,
          isError && styles.errorInput,
        ]}
      >
        {!isFocused && !value && (
          <Text style={[styles.placeholder, isError && styles.errorText]}>
            Enter {placeholder}
          </Text>
        )}
        {(isFocused || Boolean(value)) && (
          <Text style={[styles.label, isError && styles.errorText]}>
            {placeholder}
          </Text>
        )}
        <TextInput
          onFocus={handleFocus}
          onChangeText={handleTextChange}
          onBlur={handleBlur}
        />
      </View>
      {isError && <Text style={styles.errorText}>{placeholder} is </Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: "#D8E2E6",
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
  errorInput: {
    borderColor: "#FF3336",
  },
  errorText: {
    color: "#FF3336",
  },
});
