import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const PrimaryButton = ({ children, onPressButton }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPressButton}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : [styles.buttonInnerContainer]
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 9,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    backgroundColor: '#54c45e',
  },
  buttonText: {
    color: 'white',
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
