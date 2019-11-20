import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Formik } from "formik";
import { initialValues, validateSchema } from "./index";

import CancelBtn from "../../components/cancel.btn";
import DoneBtn from "../../components/done.btn";
import Checkbox from "../../components/checkbox";
import TodoInput from "../../components/todo.input";
import FooterBar from "./components/footer.bar";

interface ITaskCreation {
  navigation: any;
}

const TaskCreation: React.FC<ITaskCreation> = ({ navigation }) => {
  const cancelTask = () => navigation.goBack();

  const onSubmit = () => console.log("submit success");

  return (
    <Formik
      style={{ flex: 1 }}
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
      }) => {
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <CancelBtn handleClick={cancelTask} />
              <DoneBtn handleClick={handleSubmit} />
            </View>
            <View style={styles.body}>
              <Checkbox
                todoState={values.taskStatus}
                handleCheck={handleChange}
              />
              <TodoInput inputValue={values.task} handleChange={handleChange} />
            </View>
            <View style={styles.footer}>
              <FooterBar values={values} handleChange={handleChange} />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
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
    position: "absolute",
    bottom: 0,
    width: "100%"
  }
});

export default TaskCreation;
