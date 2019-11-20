import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

interface IFooterBar {
  // values: {
  //   task: string;
  //   taskStatus: boolean;
  //   taskDate: string;
  //   alarm: string;
  //   boxType: string;
  // };
  values: any;
  handleChange: Function;
}

const FooterBar: React.FC<IFooterBar> = ({ values, handleChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.setTimeBlock}>
        <TouchableOpacity style={styles.calendar}>
          <Icon name="calendar" size={18} color={"#252A31"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="clock" size={18} color={"#252A31"} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.setBoxBlock}>
          <Text style={{ marginRight: 10, color: "#252A31", fontSize: 18 }}>
            Inbox
          </Text>
          <Icon name="circle" size={18} color={"#252A31"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    height: 60,
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
