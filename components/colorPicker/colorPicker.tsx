import React from "react";
import { View, Text } from "react-native";
import { ColorPicker, fromHsv } from "react-native-color-picker";

interface IColorPicker {
  setColor: Function;
  color: any;
}

const Picker: React.FC<IColorPicker> = ({ setColor, color }) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: "#FFFFFF"
      }}
    >
      <Text style={{ color: "#006CFF", textAlign: "center", fontSize: 18 }}>
        choose color that you need
      </Text>
      <ColorPicker
        defaultColor="purple"
        oldColor="purple"
        color={color}
        onColorChange={color => setColor(fromHsv(color))}
        onColorSelected={color => console.log(`Color selected: ${color}`)}
        style={{ flex: 1, backgroundColor: "#FFFFFF" }}
      />
    </View>
  );
};

export default Picker;
