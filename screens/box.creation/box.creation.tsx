import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import { connect } from "react-redux";

import * as actions from "../../core/modules/todo.list/todo.actions";

import { getRandomId } from "../../utils/subFunctions";

import CancelBtn from "../../components/cancel.btn";
import DoneBtn from "../../components/done.btn";
import Input from "../../components/input";
import Picker from "../../components/colorPicker";

interface IBoxCreation {
  navigation: any;
  sendTaskBox: Function;
}

const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const BoxCreation: React.FC<IBoxCreation> = ({ navigation, sendTaskBox }) => {
  const { goBack } = navigation;

  const [inputValue, setInputValue] = useState("");

  const [color, setColor] = useState({ h: 200, s: 0.4, v: 0.4 });

  const onColorChange = (color: any) => setColor(color);

  const handleSubmit = () =>
    sendTaskBox({ title: inputValue, color, id: getRandomId(), tasks: [] });

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: "stretch" }}
        enabled
        behavior="padding"
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <CancelBtn handleClick={goBack} />
            <DoneBtn handleClick={handleSubmit} />
          </View>
          <View style={styles.body}>
            <Input
              inputValue={inputValue}
              handleChange={setInputValue}
              placeholder={"Enter new tasks box"}
            />
          </View>
          <Picker color={color} setColor={onColorChange} />
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "stretch",
    paddingBottom: 15
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  body: {
    alignItems: "stretch"
  }
});

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = {
  sendTaskBox: actions.sendTaskBoxRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxCreation);
