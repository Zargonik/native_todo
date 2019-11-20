import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CheckBox } from "react-native-elements";

import * as types from "../../../../types/types";

interface ITaskList {
  taskList: types.ITodo[];
}

const Task: React.FC<types.ITodo> = ({ text, status }) => {
  const PointIcon = <Icon name="circle" size={10} color="green" />;
  return (
    <View style={styles.taskWrapper}>
      <View style={styles.checkboxWrapper}>
        <CheckBox
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={status}
          onPress={() => console.log("check task")}
        />
      </View>
      <View style={styles.taskBox}>
        <View>
          <Text style={styles.taskText}>{text}</Text>
        </View>
        <View>{PointIcon}</View>
      </View>
    </View>
  );
};

const TaskList: React.FC<ITaskList> = ({ taskList }) => {
  return (
    <View style={styles.container}>
      {taskList.map((task, index) => {
        return (
          <Task
            key={index}
            id={task.id}
            text={task.text}
            status={task.status}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    paddingBottom: 30
  },
  taskWrapper: {
    flexDirection: "row",
    height: 80,
    alignItems: "stretch"
  },
  checkboxWrapper: {
    width: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  taskBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingRight: 15,
    borderBottomColor: "#252A31",
    borderBottomWidth: 1,
    borderStyle: "solid"
  },
  taskText: {
    color: "#252A31",
    fontSize: 18
  }
});

export default TaskList;
