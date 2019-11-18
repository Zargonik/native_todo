import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface IInput {
  inputValue: string;
  handleChange?: Function;
}

const styles = StyleSheet.create({
  // container: {
  //   width: 100,
  //   height: 30
  // },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    marginRight: 10
  }
});

const Input: React.FC<IInput> = ({ inputValue, handleChange }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Type task"
        onChangeText={e => {
          return handleChange ? handleChange(e) : null;
        }}
        value={inputValue}
      />
    </View>
  );
};

export default Input;
