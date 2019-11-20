import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface IDoneBtn {
  handleClick: Function;
}

const DoneBtn: React.FC<IDoneBtn> = ({ handleClick }) => {
  return (
    <TouchableOpacity onPress={() => (handleClick ? handleClick() : null)}>
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
