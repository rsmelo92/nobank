import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ITEM_HEIGHT_CALCULATION = height * 0.65; // 65% of screen height
const ITEM_WIDTH_CALCULATION = width * 0.9; // 90% of screen height

const ListItem = ({ icon, text }) => {
  return (
    <View style={styles.menuItem}>
      <Feather name={icon} size={20} color="#fff" />
      <Text style={styles.menuText}>{text}</Text>
      <Entypo name="chevron-small-right" size={22} color="#fff" />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  menuItem: {
    width: ITEM_WIDTH_CALCULATION,
    minHeight: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderTopColor: "rgba(255, 255, 255, 0.2)",
    borderTopWidth: 1
  },
  menuText: {
    flex: 1,
    color: "#ffffff",
    marginLeft: 10
  }
});
