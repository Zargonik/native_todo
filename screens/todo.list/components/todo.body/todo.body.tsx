import React from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { ITodo } from "../../../../types/types";
import Button from "../../../../components/button";

interface ITodoBody {
  todos: ITodo[];
  deleteTodo: Function;
  changeStatus: Function;
  spinnerStatus: boolean;
}

interface IListItem {
  text: string;
  status: boolean;
  id: number | string;
  deleteTodo: Function;
  changeStatus: Function;
}

const ListItem: React.FC<IListItem> = ({
  text,
  status,
  id,
  deleteTodo,
  changeStatus
}) => {
  return (
    <View style={styles.todoItem}>
      <TouchableOpacity
        onPress={() => changeStatus({ text, status: !status, id })}
      >
        <Text style={status ? styles.todoTextThrow : styles.todoText}>
          {text}
        </Text>
      </TouchableOpacity>
      <Button
        text={"delete"}
        handleClick={deleteTodo}
        id={id}
        inputValue={text}
      />
    </View>
  );
};

const todoList = (
  todos: ITodo[],
  deleteTodo: Function,
  changeStatus: Function
) => {
  const list = todos.map((todo, index) => {
    return (
      <ListItem
        key={index}
        text={todo.text}
        id={todo.id}
        status={todo.status}
        deleteTodo={deleteTodo}
        changeStatus={changeStatus}
      />
    );
  });
  return list;
};

const TodoBody: React.FC<ITodoBody> = ({
  todos,
  deleteTodo,
  changeStatus,
  spinnerStatus
}): any => {
  return (
    <View style={styles.todoBody}>
      {spinnerStatus ? (
        <View style={styles.spinnerWrapper}>
          <ActivityIndicator size="small" color="#40E0D0" />
        </View>
      ) : todos.length ? (
        todoList(todos, deleteTodo, changeStatus)
      ) : (
        <View style={styles.emptyList}>
          <Text>List is empty</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  todoBody: {
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "solid",
    borderRadius: 5,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    minHeight: 400,
    minWidth: 250
  },
  todoItem: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },
  todoText: {
    marginRight: 10,
    width: 200
  },
  todoTextThrow: {
    marginRight: 10,
    width: 200,
    textDecorationLine: "line-through"
  },
  emptyList: {
    width: 250,
    paddingBottom: 10,
    alignItems: "center"
  },
  spinnerWrapper: {
    width: 250
  }
});

export default TodoBody;
