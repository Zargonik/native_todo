import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import { Provider } from "react-redux";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// import Todos from "./screens/todo.list";
// import Profile from "./screens/profile";

import Main from "./screens/main";

import store from "./core/store";
import TaskCreation from "./screens/task.creation";

const rootStack = createStackNavigator(
  {
    Main: { screen: Main },
    taskCreation: { screen: TaskCreation }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const Navigation = createAppContainer(rootStack);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
