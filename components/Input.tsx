import { Dispatch, SetStateAction, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { theme } from "@/theme";
import { capitalize } from "@/utils/stringHelpers";

interface Props extends TextInputProps {
  /**
   * margin bottom
   */
  mb?: number;
  value: string;
  placeholder: string;
  isError?: boolean;
  onTextChange: Dispatch<SetStateAction<string>>;
}

export const Input: React.FC<Props> = ({
  value,
  onTextChange,
  placeholder,
  isError,
  mb,
  ...otherProps
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
          Boolean(value) && !isFocused && styles.inputWrapperWithValue,
          isFocused && styles.focusedInput,
          isError && styles.errorInput,
        ]}
      >
        {!isFocused && !value && (
          <Text style={[styles.placeholder, isError && styles.errorText]}>
            Enter {placeholder}
          </Text>
        )}
        {isFocused && (
          <Text style={[styles.label, isError && styles.errorText]}>
            {placeholder}
          </Text>
        )}
        <TextInput
          onFocus={handleFocus}
          onChangeText={handleTextChange}
          onBlur={handleBlur}
          clearButtonMode="unless-editing"
          style={[styles.input, !isFocused && { fontSize: 16 }]}
          {...otherProps}
        />
      </View>
      {isError && (
        <Text style={styles.errorText}>
          {capitalize(placeholder)} is{" "}
          {value.length === 0 ? "required" : "invalid"}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: theme.colorInputWrapper,
    height: 53,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "flex-end",
  },
  inputWrapperWithValue: {
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 0,
  },
  inputWithValue: {
    fontSize: 16,
  },
  placeholder: {
    fontSize: 16,
    color: theme.colorInputPlaceholder,
    position: "absolute",
    left: 10,
    top: 15,
  },
  label: {
    textTransform: "capitalize",
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
    borderColor: theme.colorError,
  },
  errorText: {
    color: theme.colorError,
  },
});
