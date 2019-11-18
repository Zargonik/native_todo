import React from "react";
import { CheckBox } from "react-native";

interface ICheckbox {
  todoState: boolean;
  handleCheck: Function;
}

const TodoCheck: React.FC<ICheckbox> = ({ handleCheck, todoState }) => {
  return <CheckBox onChange={() => handleCheck(todoState)} />;
};

export default TodoCheck;
