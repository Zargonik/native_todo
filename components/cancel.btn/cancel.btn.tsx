import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ICancelBtn {
  handleClick: Function;
}

const CancelBtn: React.FC<ICancelBtn> = ({ handleClick }) => {
  return (
    <TouchableOpacity onPress={() => (handleClick ? handleClick() : null)}>
      <Text
        style={{
          color: "#006CFF",
          fontSize: 18
        }}
      >
        Cancel
      </Text>
    </TouchableOpacity>
  );
};

export default CancelBtn;
