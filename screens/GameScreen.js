import { FlatList, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import { AntDesign } from "@expo/vector-icons";

let minValue = 1;
let maxValue = 99;

const randomNumber = (min, max, exclude) => {
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return randomNumber(min, max, exclude);
  }
  return random;
};

const GameScreen = ({ numberSelected, onGameOver }) => {
  const initialNumber = randomNumber(minValue, maxValue, numberSelected);
  const [playerNumber, setPlayerNumber] = React.useState(initialNumber);
  const [rounds, setRounds] = React.useState([initialNumber]);

  React.useEffect(() => {
    if (playerNumber + 1 === numberSelected) {
      onGameOver(rounds.length - 1);
    }
  }, [playerNumber, numberSelected, onGameOver]);

  const calculateNumber = (option) => {
    console.log(option);
    console.log("numberSelected=", numberSelected);
    console.log("random=", initialNumber);

    if (
      (option === "minus" && playerNumber < numberSelected) ||
      (option === "plus" && playerNumber > numberSelected)
    ) {
      Alert.alert("That is not correct", "Please try again", [{ text: "OK" }]);
      return;
    }

    if (option === "minus") {
      maxValue = playerNumber;
    } else {
      minValue = playerNumber + 1;
    }

    const newRandomNumber = randomNumber(minValue, maxValue, numberSelected);
    setPlayerNumber(newRandomNumber);
    setRounds((currentRounds) => [...currentRounds, newRandomNumber]);
  };

  return (
    <View style={styles.container}>
      <Title>Player 1</Title>
      <View style={styles.generatedNumber}>
        <Title>{playerNumber}</Title>
      </View>

      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPressButton={() => {
              calculateNumber("minus");
            }}
          >
            <AntDesign name="minuscircle" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton
            onPressButton={() => {
              calculateNumber("plus");
            }}
          >
            <AntDesign name="pluscircle" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={rounds}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>#{itemData.index+1}</Text>
              <Text>--</Text>
              <Text>Jugador 1: {itemData.item}</Text>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    alignContent: "center",
  },
  generatedNumber: {
    marginTop: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  listContainer: {
    flex: 1,
    marginTop: 24,
    alignItems: "center",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#d7faf5",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginVertical: 4,
    opacity: 0.7,
  }
});
