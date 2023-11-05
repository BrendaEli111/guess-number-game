import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const GameOverScreen = ({ onStartNewGame, rounds, number}) => {
  const resultText = "You tried " + rounds + " rounds to guess the number " + number;
  return (
    <View style={styles.container}>
      <Title>Game Over!!</Title>
      <View style={styles.imageContainer}>
        <Image style={{width: "100%", height: "100%"}} source={require("../assets/images/success.png")}></Image>
      </View>
      <Text style={styles.resultText}>{resultText}</Text>
      <PrimaryButton onPressButton={onStartNewGame}>
        Start new game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  resultText: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 30
  }
});
