import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { getColorsAndTitles } from "../../../../utils/subFunctions";

interface IFooterBar {
  values: any;
  setModalCalendarState: Function;
  setModalAlarmState: Function;
  setModalBoxPicker: Function;
  rootTodo: any;
}

const FooterBar: React.FC<IFooterBar> = ({
  setModalCalendarState,
  setModalAlarmState,
  setModalBoxPicker,
  values,
  rootTodo
}) => {
  const titleColor = getColorsAndTitles(rootTodo);
  return (
    <View style={styles.container}>
      <View style={styles.setTimeBlock}>
        <TouchableOpacity
          style={styles.calendar}
          onPress={() => setModalCalendarState()}
        >
          <Icon
            name="calendar"
            size={25}
            color={values.taskDate === "Today" ? "#252A31" : "green"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalAlarmState()}>
          <Icon
            name="clock"
            size={25}
            color={values.alarm === null ? "#252A31" : "green"}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.setBoxBlock}
          onPress={() => setModalBoxPicker()}
        >
          <Text style={{ marginRight: 10, color: "#252A31", fontSize: 20 }}>
            Inbox
          </Text>
          <Icon
            name="dot-circle"
            size={25}
            color={values.boxType ? titleColor[values.boxType] : "#252A31"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: "#252A31",
    paddingLeft: 20,
    paddingRight: 15
  },
  setTimeBlock: {
    flexDirection: "row"
  },
  setBoxBlock: {
    flexDirection: "row",
    alignItems: "center"
  },
  calendar: {
    marginRight: 30
  }
});

export default FooterBar;
