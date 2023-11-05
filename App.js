import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [numberSelected, setNumberSelected] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(1);

  const selectNumberHandler = (number) => {
    setNumberSelected(number);
  };

  const gameOverHandler = (numberOfRounds) => {
    setIsGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setNumberSelected(null);
    setIsGameOver(false);
    setGuessRounds(1);
  };

  let screen = <HomeScreen onSelectNumber={selectNumberHandler} />;

  if (numberSelected) {
    screen = (
      <GameScreen
        numberSelected={numberSelected}
        onGameOver={gameOverHandler}
      />
    );

    if (isGameOver) {
      screen = <GameOverScreen onStartNewGame = {startNewGameHandler} rounds = {guessRounds} number = {numberSelected} />;
    }
  }

  return (
    <LinearGradient
      style={styles.rootScreenContainer}
      colors={["#54c45e", "white"]}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreenContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreenContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreenContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
