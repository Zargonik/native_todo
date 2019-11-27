import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Chart from "../../components/chart";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ITest {
  navigation: any;
}

const Test: React.FC<ITest> = ({ navigation }) => {
  const [props, setProps] = useState({
    firstCircleParams: {
      start: 0,
      range: 20,
      backgroundColor: "#373332",
      fillBarColor: "#7F2F83",
      title: "title1",
      titleColor: "#EAE4EA",
      number: 3.12,
      numberColor: "#7F2F83"
    },
    secondCircleParams: {
      start: 0,
      range: 20,
      backgroundColor: "#373332",
      fillBarColor: "#2931AB",
      title: "title1",
      titleColor: "#EAE4EA",
      number: 13.345,
      numberColor: "#2931AB"
    }
  });

  const handleProps = (props: any) => setProps(props);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtnWrapper}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textColor}>Go Back</Text>
      </TouchableOpacity>
      <View style={styles.ChartWrapper}>
        <Chart
          firstCircleParams={props.firstCircleParams}
          secondCircleParams={props.secondCircleParams}
        />
      </View>
      <View style={styles.btnBlock}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            handleProps({
              firstCircleParams: {
                start: 0,
                range: 20,
                backgroundColor: "#373332",
                fillBarColor: "#7F2F83",
                title: "title1",
                titleColor: "#EAE4EA",
                number: 0,
                numberColor: "#7F2F83"
              },
              secondCircleParams: {
                start: 0,
                range: 20,
                backgroundColor: "#373332",
                fillBarColor: "#2931AB",
                title: "title1",
                titleColor: "#EAE4EA",
                number: 0,
                numberColor: "#2931AB"
              }
            })
          }
        >
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            handleProps({
              firstCircleParams: {
                start: 0,
                range: 20,
                backgroundColor: "#373332",
                fillBarColor: "#7F2F83",
                title: "title1",
                titleColor: "#EAE4EA",
                number: 3.12,
                numberColor: "#7F2F83"
              },
              secondCircleParams: {
                start: 0,
                range: 20,
                backgroundColor: "#373332",
                fillBarColor: "#2931AB",
                title: "title1",
                titleColor: "#EAE4EA",
                number: 13.345,
                numberColor: "#2931AB"
              }
            })
          }
        >
          <Text style={styles.btnText}>Set Props</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    paddingTop: 35,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  backBtnWrapper: {
    width: 30,
    height: 25
  },
  textColor: {
    color: "#006CFF"
  },
  ChartWrapper: {
    // borderWidth: 1
    flex: 1
  },
  btnBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  btn: {
    width: 70,
    height: 45,
    borderWidth: 1,
    borderColor: "#006CFF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    color: "#006CFF"
  }
});

export default Test;
