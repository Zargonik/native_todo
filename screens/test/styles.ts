import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
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
  backBtnWrapper: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingTop: 30,
    justifyContent: "flex-start"
  },
  btn: {
    borderWidth: 1,
    borderColor: "#006CFF",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 100,
    maxWidth: 110
  },
  btnText: {
    color: "#006CFF"
  }
});
