import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import AnimateNumber from "react-native-animate-number";
import { IChart } from "../../screens/test/types";

const Chart: React.FC<IChart> = ({
  firstCircleParams,
  secondCircleParams,
  animationDuration = 1500
}) => {
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

  const numberFormatter = (digitsAfterDot: number) => (data: number) =>
    data.toFixed(digitsAfterDot).replace(/\./g, ",");

  return (
    <View style={styles.container}>
      <View style={styles.firstCircle}>
        <AnimatedCircularProgress
          size={firstCircleSize}
          width={firstCircleWidth}
          fill={firstCircleFill}
          rotation={0}
          duration={animationDuration}
          lineCap={"round"}
          tintColor={firstCircleParams.fillBarColor}
          backgroundColor={firstCircleParams.backgroundColor}
        />
      </View>
      <View style={styles.secondCircle}>
        <AnimatedCircularProgress
          size={secondCircleSize}
          width={secondCircleWidth}
          fill={secondCircleFill}
          rotation={0}
          duration={animationDuration}
          lineCap={"round"}
          tintColor={secondCircleParams.fillBarColor}
          backgroundColor={secondCircleParams.backgroundColor}
        />
      </View>
      <View
        style={{
          position: "absolute",
          width: textBoxWidth,
          height: textBoxHeight,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <View style={styles.subTextBox}>
          <Text
            style={{ fontSize: titleSize, color: firstCircleParams.titleColor }}
          >
            {firstCircleParams.title}
          </Text>
          <AnimateNumber
            style={{
              fontSize: numbersSize,
              color: firstCircleParams.numberColor
            }}
            value={firstCircleParams.number}
            formatter={numberFormatter(
              firstCircleParams.animationDigitsAfterDot
            )}
          />
        </View>
        <View style={styles.subTextBox}>
          <Text
            style={{
              fontSize: titleSize,
              color: secondCircleParams.titleColor
            }}
          >
            {secondCircleParams.title}
          </Text>
          <AnimateNumber
            style={{
              fontSize: numbersSize,
              color: secondCircleParams.numberColor
            }}
            value={secondCircleParams.number}
            formatter={numberFormatter(
              secondCircleParams.animationDigitsAfterDot
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  firstCircle: {
    position: "absolute"
  },
  secondCircle: {
    position: "absolute"
  },
  textBox: {
    position: "absolute"
  },
  subTextBox: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Chart;
