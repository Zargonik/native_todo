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
      onChangeText={handleChange("task")}
      onBlur={handleBlur("task")}
      value={values.task}
      placeholder={"what do you want to do?"}
    />
  );
};

export default TodoInput;
