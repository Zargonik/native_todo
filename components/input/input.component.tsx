import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface IInput {
  inputValue: string;
  handleChange?: Function;
  placeholder: string;
}

const Input: React.FC<IInput> = ({ inputValue, handleChange, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={e => {
          return handleChange ? handleChange(e) : null;
        }}
        value={inputValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch"
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderBottomWidth: 1,
    fontSize: 18
  }
});

export default Input;
