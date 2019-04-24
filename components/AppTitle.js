import React from "react";
import { StyleSheet, View, Text } from "react-native";

const AppTitle = () => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>Nu Rafael</Text>
    </View>
  );
};

export default AppTitle;

const styles = StyleSheet.create({
  titleWrapper: {
    height: 100,
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    color: "#fff"
  }
});
