import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
function PrimaryButton({ children, pressHandler }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: Colors.primary800 }}
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: Colors.primary700,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
