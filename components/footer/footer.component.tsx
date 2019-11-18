import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome5";

interface IFooter {
  props?: any;
}

interface IFooterLink {
  text: string;
  props?: any;
  route: string;
}

const FooterLink: React.FC<IFooterLink> = ({ text, props, route }) => (
  <TouchableOpacity
    style={styles.linkWrapper}
    onPress={() => props.navigation.navigate(route)}
  >
    <Text>{text}</Text>
  </TouchableOpacity>
);

const TodoIcon = <Icon name="clipboard-list" size={30} color="#900" />;

const ProfileIcon = <Icon name="user-circle" size={30} color="#900" />;

const Footer: React.FC<IFooter> = ({ props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Todo")}>
        {TodoIcon}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
        {ProfileIcon}
      </TouchableOpacity>
      <FooterLink text={"third"} props={props} route={"Todo"} />
      <FooterLink text={"fourth"} props={props} route={"Todo"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    paddingBottom: 5,
    paddingTop: 5
  },
  linkWrapper: {
    height: 30,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C9C3D1",
    borderRadius: 5
  }
});

export default Footer;
