import React from "react";
import { CheckBox } from "react-native-elements";

interface ICheckbox {
  todoState: boolean;
  handleCheck: Function;
}

const TodoCheck: React.FC<ICheckbox> = ({ handleCheck, todoState }) => {
  return (
    <CheckBox
      size={30}
      checkedIcon="check-circle"
      uncheckedIcon="circle-o"
      checked={todoState}
      onPress={() => handleCheck()}
    />
  );
};

export default TodoCheck;
