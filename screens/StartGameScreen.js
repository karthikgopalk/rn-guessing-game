import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
function StartGameScreen({ onPickedNumber }) {
  const [enteredText, setEnteredText] = useState("");

  const { width, height } = useWindowDimensions();

  function textInputHandler(enteredValue) {
    setEnteredText(enteredValue);
  }
  function resetInputHandler() {
    setEnteredText("");
  }
  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredText);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number must be between 1 to 99", [
        { text: "ok", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickedNumber(choosenNumber);
    console.log("valid input!");
  }

  const marginTopDimension = height < 350 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="height">
        <View style={[styles.container, { marginTop: marginTopDimension }]}>
          <Title title="Guess My Number" />
          <Card>
            <InstructionText>Enter the number</InstructionText>
            <TextInput
              placeholder="ti"
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredText}
              onChangeText={textInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton pressHandler={resetInputHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton pressHandler={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
