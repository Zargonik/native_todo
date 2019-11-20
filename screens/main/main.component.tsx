import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

import Header from "./components/header";
import TaskList from "./components/task.list";
import BoxesList from "./components/boxes.list";
import TaskCreatorBtn from "../../components/task.creator.btn";
import ChoiceModal from "./components/choice.modal";

import { rootTodo } from "../../mocks/mocks";

import { getAllTasks } from "../../utils/subFunctions";

interface IMain {
  // rootTodo: any;
  navigation: any;
}

const Main: React.FC<IMain> = ({ navigation }) => {
  const [modalStatus, setModalStatus] = useState(false);

  const handleModal = () => {
    setModalStatus(!modalStatus);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={modalStatus ? { opacity: 0.7, backgroundColor: "gray" } : {}}
      >
        <Header day={"Today"} />
        <TaskList taskList={getAllTasks(rootTodo)} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    paddingTop: 20
  }
});

export default Main;
