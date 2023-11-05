import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

const HomeScreen = ({ onSelectNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredTextNumber) => {
    setEnteredNumber(enteredTextNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const validateInputHandler = () => {
    const number = parseInt(enteredNumber);
    if (isNaN(number)) {
      Alert.alert(
        "Invalid number",
        "Number incorrect, the value must be a number",
        [{ text: "OK", onPress: resetInputHandler, style: "destructive" }]
      );
      return;
    }
    onSelectNumber(number);
  };

  const marginTop = height <= 360 ? 30 : 100;
  return (
    <ScrollView style={styles.rootContainer}>
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <View style={[styles.container, { marginTop: marginTop }]}>
          <Title>Guess my number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.mainButtonContainer}>
                <PrimaryButton onPressButton={resetInputHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.secondButtonContainer}>
                <PrimaryButton onPressButton={validateInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    //marginTop: deviceWidth <= 360 ? 30 : 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    borderBottomColor: "#757575",
    borderBottomWidth: 3,
    color: "red",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    backgroundColor: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },
  mainButtonContainer: {
    flex: 1,
  },
  secondButtonContainer: {
    flex: 1,
  },
});
