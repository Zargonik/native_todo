import React from "react";
import { CheckBox } from "react-native-elements";

interface ICheckbox {
  values: any;
  setFieldValue: Function;
}

const TodoCheck: React.FC<ICheckbox> = ({ setFieldValue, values }) => {
  return (
    <CheckBox
      size={30}
      checkedIcon="check-circle"
      uncheckedIcon="circle-o"
      checked={values.taskStatus}
      onPress={() => setFieldValue("taskStatus", !values.taskStatus)}
    />
  );
};

export default TodoCheck;
