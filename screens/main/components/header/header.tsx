import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IHeader {
  day: string;
  navigate: any;
}

const Header: React.FC<IHeader> = ({ day, navigate }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dateText}>{day}</Text>
      </View>
      <TouchableOpacity
        style={styles.pointWrapper}
        onPress={() => navigate("Test")}
      >
        <View style={styles.pintView} />
        <View style={styles.pintView} />
        <View style={styles.pintView} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 60,
    paddingRight: 13.5,
    alignItems: "center",
    justifyContent: "space-between"
  },
  dateText: {
    fontSize: 32,
    color: "#252A31",
    fontWeight: "bold"
  },
  pointWrapper: {
    flexDirection: "row",
    width: 25,
    height: 25,
    justifyContent: "center"
  },
  pintView: {
    width: 5,
    height: 5,
    backgroundColor: "#006CFF",
    borderRadius: 2.5
  }
});

export default Header;
