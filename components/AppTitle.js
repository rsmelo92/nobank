import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { Entypo } from "@expo/vector-icons";

const AppTitle = ({ onPress, userName }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          NO <Text style={styles.name}>{userName}</Text>
        </Text>
        <Entypo name="chevron-small-down" size={22} color="#fff" />
      </View>
    </TouchableWithoutFeedback>
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
