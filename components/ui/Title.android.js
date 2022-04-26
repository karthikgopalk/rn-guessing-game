import { StyleSheet, Text, Platform } from "react-native";
function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}
export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 8,
    margin: 8,
    borderWidth: 2,
    // borderWidth: Platform.select({ android: 0, ios: 2 }),
    borderColor: "white",
    fontFamily: "open-sans-bold",
    maxWidth: "80%",
  },
});
