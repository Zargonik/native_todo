import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IHeader {
  day: string;
}

const Header: React.FC<IHeader> = ({ day }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dateText}>{day}</Text>
      </View>
      <View style={styles.pointWrapper}>
        <View style={styles.pintView} />
        <View style={styles.pintView} />
        <View style={styles.pintView} />
      </View>
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
