import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  backBtnWrapper: {
    width: 30,
    height: 25
  },
  textColor: {
    color: "#006CFF"
  },
  ChartWrapper: {
    flex: 1
  },
  btnBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  btn: {
    borderWidth: 1,
    borderColor: "#006CFF",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 100
  },
  btnText: {
    color: "#006CFF"
  }
});
