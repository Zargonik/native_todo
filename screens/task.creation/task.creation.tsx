import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import { connect } from "react-redux";

import { Formik } from "formik";
import { initialValues, validateSchema } from "./index";

import * as actions from "../../core/modules/todo.list/todo.actions";

import DateTimePicker from "react-native-modal-datetime-picker";

import CancelBtn from "../../components/cancel.btn";
import DoneBtn from "../../components/done.btn";
import Checkbox from "../../components/checkbox";
import TodoInput from "../../components/todo.input";
import FooterBar from "./components/footer.bar";
import IModalBoxPicker from "./components/modal.box.picker";

import { rootTodo } from "../../mocks/mocks";

interface ITaskCreation {
  navigation: any;
  sendTodo: Function;
}

const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const TaskCreation: React.FC<ITaskCreation> = ({ navigation, sendTodo }) => {
  const cancelTask = () => navigation.goBack();

  const [modalDateState, setModalDataState] = useState(false);

  const handleModalDateState = () => setModalDataState(!modalDateState);

  const [modalAlarmState, setModalAlarmState] = useState(false);

  const handleModalAlarmState = () => setModalAlarmState(!modalAlarmState);

  const [modalBoxPicker, setModalBoxPicker] = useState(false);

  const handleModalBoxPicker = () => setModalBoxPicker(!modalBoxPicker);

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: "stretch" }}
        enabled
        behavior="padding"
      >
        <Formik
          initialValues={initialValues}
          // validationSchema={validateSchema}
          onSubmit={values => {
            sendTodo(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
            errors,
            touched
          }) => {
            return (
              <View style={styles.container}>
                <View>
                  <View style={styles.header}>
                    <CancelBtn handleClick={cancelTask} />
                    <DoneBtn
                      handleClick={handleSubmit}
                      setFieldValue={setFieldValue}
                    />
                  </View>
                  <View style={styles.body}>
                    <Checkbox values={values} setFieldValue={setFieldValue} />
                    <TodoInput
                      values={values}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                  </View>
                </View>
                <View style={styles.footer}>
                  <FooterBar
                    values={values}
                    setModalAlarmState={handleModalAlarmState}
                    setModalBoxPicker={handleModalBoxPicker}
                    setModalCalendarState={handleModalDateState}
                    rootTodo={rootTodo}
                  />
                </View>
                <DateTimePicker
                  isVisible={modalDateState}
                  onConfirm={data => {
                    setFieldValue("taskDate", data);
                    handleModalDateState();
                  }}
                  onCancel={handleModalDateState}
                  mode={"date"}
                />
                <DateTimePicker
                  isVisible={modalAlarmState}
                  onConfirm={time => {
                    setFieldValue("alarm", time);
                    handleModalAlarmState();
                  }}
                  onCancel={handleModalAlarmState}
                  mode={"time"}
                />
                <IModalBoxPicker
                  rootTodo={rootTodo}
                  setFieldValue={setFieldValue}
                  handleModalBoxPicker={handleModalBoxPicker}
                  modalBoxPickerState={modalBoxPicker}
                  closeModal={handleModalBoxPicker}
                />
              </View>
            );
          }}
        </Formik>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = {
  sendTodo: actions.sendTodoRequest
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingTop: 30
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30
  },
  body: {
    flexDirection: "row",
    right: 15,
    alignItems: "center",
    paddingLeft: 15
  },
  footer: {
    height: 60,
    // position: "absolute",
    bottom: 0
    // width: "100%"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreation);
