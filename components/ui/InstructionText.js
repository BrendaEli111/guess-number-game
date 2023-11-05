import { Text, StyleSheet, Dimensions } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  instructionText: {
    color: '#4c535d',
    fontSize: deviceWidth <= 360 ? 20 : 24,
  },
});
