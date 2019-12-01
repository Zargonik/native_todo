import React from "react";
import { TextInput } from "react-native";

interface ITodoInput {
  values: any;
  handleChange?: Function;
  handleBlur?: Function;
}

const TodoInput: React.FC<ITodoInput> = ({
  values,
  handleChange = () => {},
  handleBlur = () => {}
}) => {
  return (
    <TextInput
      style={{ height: 25, color: "#006CFF", fontSize: 18 }}
      onChangeText={handleChange("text")}
      onBlur={handleBlur("text")}
      value={values.text}
      placeholder={"what do you want to do?"}
    />
  );
};

export default TodoInput;
