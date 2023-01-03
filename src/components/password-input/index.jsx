import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { COLORS } from "../../constants";

const PasswordInput = ({ style, value, onChange }) => {
  const [eyeClicked, setEyeClicked] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={{ ...style, ...styles.input }}
        placeholder="Enter your password..."
        secureTextEntry={!eyeClicked}
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={30}
        keyboardType="default"
        value={value}
        onChangeText={onChange}
      />
      <Ionicons
        style={styles.icon}
        name={eyeClicked ? "eye" : "eye-off"}
        color={COLORS.secondary}
        size={30}
        onPress={() => setEyeClicked(!eyeClicked)}
      />
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: COLORS.primary,
    marginBottom: 5,
    paddingVertical: 5,
    borderBottomWidth: 1,
  },
  icon: {
    position: "absolute",
    right: 0,
    bottom: 5,
  },
});
