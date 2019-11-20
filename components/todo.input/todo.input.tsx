import React from "react";
import { TextInput } from "react-native";

interface ITodoInput {
  inputValue: string;
  handleChange: Function;
}

const TodoInput: React.FC<ITodoInput> = ({ inputValue, handleChange }) => {
  return (
    <TextInput
      style={{ height: 25, color: "#006CFF", fontSize: 18 }}
      onChangeText={text => handleChange(text)}
      value={inputValue}
      placeholder={"what do you want to do?"}
    />
  );
};

export default TodoInput;
