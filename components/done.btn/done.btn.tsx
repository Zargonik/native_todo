import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { getRandomId } from "../../utils/subFunctions";

interface IDoneBtn {
  handleClick: Function;
  setFieldValue?: Function;
}

const DoneBtn: React.FC<IDoneBtn> = ({ handleClick, setFieldValue }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setFieldValue ? setFieldValue("id", getRandomId()) : null;
        handleClick ? handleClick() : null;
      }}
    >
      <Text
        style={{
          color: "#006CFF",
          fontSize: 18,
          fontWeight: "bold"
        }}
      >
        Done
      </Text>
    </TouchableOpacity>
  );
};

export default DoneBtn;
