import React from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from "react-native";

import BoxesList from "../../../main/components/boxes.list";
import CancelBtn from "../../../../components/cancel.btn";

interface IModalBoxPicker {
  modalBoxPickerState: boolean;
  handleModalBoxPicker: Function;
  rootTodo: any;
  setFieldValue: Function;
  closeModal: Function;
}

const ModalBoxPicker: React.FC<IModalBoxPicker> = ({
  modalBoxPickerState,
  handleModalBoxPicker,
  rootTodo,
  setFieldValue,
  closeModal
}) => {
  return (
    <Modal
      visible={modalBoxPickerState}
      animationType="slide"
      // transparent={true}

      presentationStyle={"pageSheet"}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <BoxesList
            rootTodo={rootTodo}
            handleClick={setFieldValue}
            closeModal={closeModal}
          />
          <View style={styles.footer}>
            <CancelBtn handleClick={handleModalBoxPicker} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 20,
    paddingTop: 10
  }
});

export default ModalBoxPicker;
