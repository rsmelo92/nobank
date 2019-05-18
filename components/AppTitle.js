import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const AppTitle = () => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>
        NO <Text style={styles.name}>Rafael</Text>
      </Text>
      <Entypo name="chevron-small-down" size={22} color="#fff" />
    </View>
  );
};

export default AppTitle;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "#fff"
  },
  name: {
    fontSize: 24,
    fontWeight: "bold"
  }
});
