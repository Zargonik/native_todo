import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "./components/header";
import TaskList from "./components/task.list";

import { rootTodo } from "../../mocks/mocks";

import { getAllTasks } from "../../utils/subFunctions";

interface IMain {
  // rootTodo: any;
}

const Main: React.FC<IMain> = ({}) => {
  return (
    <View>
      <Header day={"today"} />
      <TaskList taskList={getAllTasks(rootTodo)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  }
});

export default Main;
