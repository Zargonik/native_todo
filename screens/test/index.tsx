import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationParams } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import Chart from "../../components/chart";

import { IChart } from "../../screens/test/types";
import { filledChart, emptyChart } from "./mock-data";

interface ITest {
  navigation: NavigationParams;
}

const Test: React.FC<ITest> = ({ navigation }) => {
  const [props, setProps] = useState(filledChart);

  const handleProps = (props: IChart) => setProps(props);

  return (
    <View style={styles.container}>
      <View style={styles.backBtnWrapper}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText} >Go Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ChartWrapper}>
        <Chart
          firstCircleParams={props.firstCircleParams}
          secondCircleParams={props.secondCircleParams}
        />
      </View>
      <View style={styles.btnBlock}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleProps(emptyChart)}
        >
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleProps(filledChart)}
        >
          <Text style={styles.btnText}>Set Props</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Test;
