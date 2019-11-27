import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import { Provider } from "react-redux";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./screens/main";

import store from "./core/store";
import TaskCreation from "./screens/task.creation";
import BoxCreation from "./screens/box.creation";
import Test from "./screens/test";

const rootStack = createStackNavigator(
  {
    Main: { screen: Main },
    TaskCreation: { screen: TaskCreation },
    BoxCreation: { screen: BoxCreation },
    Test: { screen: Test }
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
