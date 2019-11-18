import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import * as actions from "../../core/modules/todo.list/todo.actions";

import * as selectors from "../../core/modules/todo.list/todo.selector";

import TodoHeader from "./components/todo.header";
import TodoBody from "./components/todo.body";
import Footer from "../../components/footer/footer.component";
import { ITodo } from "../../types/types";

interface ITodosComponent {
  todos: ITodo[];
  getTodos: Function;
  addTodo: Function;
  changeStatus: Function;
  remove: Function;
  spinnerStatus: boolean;
}

type Todos = React.FC<ITodosComponent> & {
  navigationOptions: any;
};

const TodosComponent: Todos = ({
  todos,
  getTodos,
  addTodo,
  changeStatus,
  remove,
  spinnerStatus,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: any) => setInputValue(e);
  return (
    <View style={styles.container}>
      <View style={styles.todoWrapper}>
        <TodoHeader
          inputValue={inputValue}
          handleChange={handleChange}
          handleClick={addTodo}
          ButtonText={"add todo"}
          id={Number(todos.length) + 1}
          setInputValue={setInputValue}
        />
        <TodoBody
          todos={todos}
          deleteTodo={remove}
          changeStatus={changeStatus}
          spinnerStatus={spinnerStatus}
        />
      </View>
      <View style={styles.footerWrapper}>
        <Footer props={props} />
      </View>
    </View>
  );
};

TodosComponent.navigationOptions = {
  title: "Home"
};

const mapStateToProps = (state: any) => ({
  todos: selectors.getTodosSelector(state),
  spinnerStatus: selectors.getSpinnerStatusSelector(state)
});

const mapDispatchToProps = {
  addTodo: actions.sendTodoRequest,
  changeStatus: actions.changeTodoStatusRequest,
  remove: actions.deleteTodoRequest,
  getTodos: actions.getTodosRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosComponent);

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    flex: 1
  },
  todoWrapper: {
    flex: 1,
    alignItems: "center"
  },
  footerWrapper: {
    alignItems: "stretch"
  }
});
