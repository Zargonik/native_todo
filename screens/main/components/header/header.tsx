import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IHeader {
  day: string;
}

const Header: React.FC<IHeader> = ({ day }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{day}</Text>
      <Text style={styles.dotText}>...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 60,
    alignItems: "center"
  },
  dateText: {
    fontSize: 32,
    color: "#252A31",
    fontFamily: "SFProDisplay",
    fontWeight: "bold"
  },
  dotText: {
    color: "#DADADA"
  }
});

export default Header;
