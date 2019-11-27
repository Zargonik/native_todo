import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

import { connect } from "react-redux";

import * as types from "../../types/types";

import Header from "./components/header";
import TaskList from "./components/task.list";
import BoxesList from "./components/boxes.list";
import TaskCreatorBtn from "../../components/task.creator.btn";
import ChoiceModal from "./components/choice.modal";

import { rootTodo } from "../../mocks/mocks";

import { getColorsAndTitles } from "../../utils/subFunctions";

import { getAllTasks } from "../../utils/subFunctions";

interface IMain {
  // rootTodo: any;
  navigation: any;
  rootTodo: types.IRootTodo;
}

const Main: React.FC<IMain> = ({ navigation, rootTodo }) => {
  const [modalStatus, setModalStatus] = useState(false);

  const handleModal = () => {
    setModalStatus(!modalStatus);
  };

  // console.log(rootTodo, "rootTodo");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={modalStatus ? { opacity: 0.7, backgroundColor: "gray" } : {}}
      >
        <Header day={"Today"} navigate={navigation.navigate} />
        <TaskList
          taskList={getAllTasks(rootTodo)}
          NamesAndColors={getColorsAndTitles(rootTodo)}
        />
        <BoxesList rootTodo={rootTodo} />
      </ScrollView>
      <TaskCreatorBtn modalStatus={modalStatus} setModalStatus={handleModal} />
      <ChoiceModal
        navigate={navigation.navigate}
        modalStatus={modalStatus}
        setModalStatus={handleModal}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => {
  return {
    rootTodo: state.todos.rootTodo
  };
};

const mapDispatchToProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    paddingTop: 30
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
