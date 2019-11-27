import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

interface IChart {
  firstCircleParams: {
    start: number;
    range: number;
    backgroundColor: string;
    fillBarColor: string;
    title: string;
    titleColor: string;
    number: number;
    numberColor: string;
  };
  secondCircleParams: {
    start: number;
    range: number;
    backgroundColor: string;
    fillBarColor: string;
    title: string;
    titleColor: string;
    number: number;
    numberColor: string;
  };
}

const Chart: React.FC<IChart> = ({ firstCircleParams, secondCircleParams }) => {
  const switchDotOnComma = (str: string) => {
    return str
      .split("")
      .map((symbol: string) => {
        if (symbol === ".") {
          return ",";
        } else {
          return symbol;
        }
      })
      .join("");
  };

  const screenWidth = Dimensions.get("window").width;
  const firstCircleSize = screenWidth * 0.8;
  const secondCircleSize = screenWidth * 0.6;

  const firstCircleWidth = screenWidth * 0.095;
  const secondCircleWidth = screenWidth * 0.095;

  const textBoxWidth = screenWidth * 0.3;
  const textBoxHeight = screenWidth * 0.25;

  const titleSize = screenWidth * 0.04;
  const numbersSize = screenWidth * 0.05;

  const firstCircleFill =
    (firstCircleParams.number * 100) / firstCircleParams.range;
  const secondCircleFill =
    (secondCircleParams.number * 100) / secondCircleParams.range;

  return (
    <View style={styles.container}>
      <View style={styles.firstCircle}>
        <AnimatedCircularProgress
          size={firstCircleSize}
          width={firstCircleWidth}
          fill={firstCircleFill}
          rotation={0}
          duration={1500}
          lineCap={"round"}
          tintColor={firstCircleParams.fillBarColor}
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#3d5875"
        />
      </View>
      <View style={styles.secondCircle}>
        <AnimatedCircularProgress
          size={secondCircleSize}
          width={secondCircleWidth}
          fill={secondCircleFill}
          rotation={0}
          duration={1500}
          lineCap={"round"}
          tintColor={secondCircleParams.fillBarColor}
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#3d5875"
        />
      </View>
      <View
        style={{
          position: "absolute",
          // borderWidth: 1,
          width: textBoxWidth,
          height: textBoxHeight,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{ fontSize: titleSize, color: firstCircleParams.titleColor }}
          >
            title 1
          </Text>
          <Text
            style={{
              fontSize: numbersSize,
              color: firstCircleParams.numberColor
            }}
          >
            {switchDotOnComma(firstCircleParams.number.toString())}
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontSize: titleSize,
              color: secondCircleParams.titleColor
            }}
          >
            title 2
          </Text>
          <Text
            style={{
              fontSize: numbersSize,
              color: secondCircleParams.numberColor
            }}
          >
            {switchDotOnComma(secondCircleParams.number.toString())}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderWidth: 2,
    justifyContent: "center",
    backgroundColor: "black"
  },
  firstCircle: {
    // flex: 1,
    position: "absolute"
  },
  secondCircle: {
    // flex: 1,
    position: "absolute"
  },
  textBox: {
    position: "absolute"
    // borderWidth: 1
  }
});

export default Chart;
