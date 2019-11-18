import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Footer from "../../components/footer/footer.component";

interface IProfile {
  props?: any;
}

const Profile: React.FC<IProfile> = ({ ...props }) => {
  return (
    <View>
      <View>
        <Text>Profile screen</Text>
      </View>
      <View>
        <Footer props={props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Profile;
