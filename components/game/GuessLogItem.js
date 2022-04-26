import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/Colors";
function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItems}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>#Opponent's Guess {guess}</Text>
    </View>
  );
}
export default GuessLogItem;
const styles = StyleSheet.create({
  listItems: {
    borderColor: Colors.primary500,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.accent500,
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
