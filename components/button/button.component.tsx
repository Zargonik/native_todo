import React from "react";

import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

interface IButton {
  handleClick: Function;
  text: string;
  inputValue: string;
  id?: number | string;
  setInputValue?: Function;
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 2,
    paddingLeft: 5,
    paddingRight: 5
  }
});

const Button: React.FC<IButton> = ({
  handleClick,
  text,
  inputValue,
  id,
  setInputValue
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          handleClick({ text: inputValue, status: false, id: id });
          return setInputValue ? setInputValue("") : null;
        }}
      >
        <View>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
