import { StyleSheet, Text, Dimensions, Platform } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;


const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    fontSize: deviceWidth <= 360 ? 20 : 24,
    fontWeight: "bold",
    textAlign: "center",
    color: '#808080',
    padding: 12,
    borderWidth: Platform.OS === "android" ? 2 : 1,
    //borderWidth: Platform.select({ios: 0, android: 2}),
    borderColor: '#808080',
    width: 350,
    maxWidth: "90%",
  },
});
