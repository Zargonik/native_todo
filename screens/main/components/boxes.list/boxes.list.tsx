import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import * as types from "../../../../types/types";

interface IBoxesList {
  rootTodo: any;
  handleClick?: Function;
  closeModal?: Function;
}

interface ITasksBox {
  color: string;
  title: string;
  tasks: types.ITodo[];
  handleClick: Function | null;
  closeModal: Function | null;
}

export const TasksBox: React.FC<ITasksBox> = ({
  color,
  title,
  tasks,
  handleClick,
  closeModal
}) => {
  const showRow = () => {
    if (tasks && tasks.length) {
      if (tasks && tasks.length > 1) {
        return `${tasks.length} tasks`;
      } else {
        return `${tasks.length} task`;
      }
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleClick ? handleClick("boxType", title) : null;
        closeModal ? closeModal() : null;
      }}
      // onPress={() => (handleClick ? console.log("click", handleClick()) : null)}
      style={{
        backgroundColor: color,
        borderRadius: 10,
        alignItems: "flex-start",
        paddingLeft: 16,
        height: 70,
        justifyContent: "center",
        marginBottom: 10
      }}
    >
      <Text
        style={{
          marginBottom: 5
        }}
      >
        {title}
      </Text>
      <Text>{showRow()}</Text>
    </TouchableOpacity>
  );
};

const BoxesList: React.FC<IBoxesList> = ({
  rootTodo,
  handleClick,
  closeModal
}) => {
  console.log(rootTodo, "rootTodo");
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text
          style={{
            color: "#252A31"
          }}
        >
          Lists
        </Text>
      </View>
      <View>
        {rootTodo.map((tasksBox: types.ITasksBox, index: number) => {
          return (
            <TasksBox
              key={index}
              color={tasksBox.color}
              title={tasksBox.title}
              tasks={tasksBox.tasks}
              handleClick={handleClick ? handleClick : null}
              closeModal={closeModal ? closeModal : null}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 15,
    paddingTop: 15
  },
  titleWrapper: {
    height: 30,
    alignItems: "flex-start",
    justifyContent: "center"
  }
});

export default BoxesList;
