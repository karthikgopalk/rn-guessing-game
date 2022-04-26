import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
export default Card;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    padding: deviceWidth < 380 ? 16 : 28,
    backgroundColor: Colors.primary600,
    marginHorizontal: 24,
    borderRadius: 9,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
