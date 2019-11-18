import React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../../../../components/button";
import Input from "../../../../components/input";

interface ITodoHeader {
  handleChange: Function;
  inputValue: string;
  handleClick: Function;
  ButtonText: string;
  id: number | string;
  setInputValue: Function;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10
    // justifyContent: "center"
    // alignItems: "center"
  }
});

const TodoHeader: React.FC<ITodoHeader> = ({
  handleChange,
  inputValue,
  handleClick,
  ButtonText,
  id,
  setInputValue
}) => {
  return (
    <View style={styles.container}>
      <Input handleChange={handleChange} inputValue={inputValue} />
      <Button
        handleClick={handleClick}
        text={ButtonText}
        inputValue={inputValue}
        id={id}
        setInputValue={setInputValue}
      />
    </View>
  );
};

export default TodoHeader;
