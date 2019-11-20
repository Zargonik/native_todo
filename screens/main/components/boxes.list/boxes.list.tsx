import React from "react";
import { Text, View, StyleSheet } from "react-native";

import * as types from "../../../../types/types";

interface IBoxesList {
  rootTodo: any;
}

interface ITasksBox {
  color: string;
  title: string;
  tasks: types.ITodo[];
}

const TasksBox: React.FC<ITasksBox> = ({ color, title, tasks }) => {
  const showRow = () => {
    if (tasks.length) {
      if (tasks.length > 1) {
        return `${tasks.length} tasks`;
      } else {
        return `${tasks.length} task`;
      }
    }
  };

  return (
    <View
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
    </View>
  );
};

const BoxesList: React.FC<IBoxesList> = ({ rootTodo }) => {
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
        {rootTodo.map((item: types.ITodoList, index: number) => {
          return (
            <TasksBox
              key={index}
              color={item.color}
              title={item.title}
              tasks={item.tasks}
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
    paddingLeft: 60,
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
