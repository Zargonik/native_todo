import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

interface IChoiceModal {
  modalStatus: boolean;
  navigate: any;
  setModalStatus: Function;
}

const ChoiceModal: React.FC<IChoiceModal> = ({
  modalStatus,
  navigate,
  setModalStatus
}) => {
  return (
    <View
      style={
        modalStatus
          ? {
              position: "absolute",
              right: 15,
              bottom: 125,
              backgroundColor: "#FFFFFF",
              borderRadius: 5
            }
          : {
              display: "none"
            }
      }
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 60,
          width: 220,
          paddingLeft: 25,
          alignItems: "center",
          borderBottomWidth: 0.5,
          borderBottomColor: "gray"
        }}
        onPress={() => {
          setModalStatus();
          navigate("TaskCreation");
        }}
      >
        <Icon name="check-circle" size={30} color="#006CFF" />
        <Text style={{ color: "#006CFF", fontSize: 18, marginLeft: 15 }}>
          Task
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 60,
          width: 220,
          paddingLeft: 25,
          alignItems: "center"
        }}
        onPress={() => {
          setModalStatus();
          navigate("BoxCreation");
        }}
      >
        <Icon name="th-list" size={30} color="#006CFF" />
        <Text style={{ color: "#006CFF", fontSize: 18, marginLeft: 15 }}>
          List
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChoiceModal;
