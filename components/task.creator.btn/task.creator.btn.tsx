import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface ITaskCreator {
  modalStatus: boolean;
  setModalStatus: Function;
}

const TaskCreatorBtn: React.FC<ITaskCreator> = ({
  modalStatus,
  setModalStatus
}) => {
  return (
    <TouchableOpacity
      style={modalStatus ? styles.container2 : styles.container1}
      onPress={() => setModalStatus()}
    >
      {modalStatus ? (
        <Icon name="times" size={18} color="white" />
      ) : (
        <Icon name="plus" size={18} color="#006CFF" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container1: {
    width: 64,
    height: 64,
    borderRadius: 32,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 45,
    right: 15,
    backgroundColor: "#FFFFFF"
  },
  container2: {
    width: 64,
    height: 64,
    borderRadius: 32,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 45,
    right: 15,
    backgroundColor: "#006CFF"
  }
});

export default TaskCreatorBtn;
