import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const CardGenerator = ({ card }) => (
  <View style={styles.slide}>
    <View style={styles.slideHeader}>{card.header.icon()}</View>
    <View style={styles.slideBody}>
      {card.body.title()}
      {card.body.value()}
      {card.body.subtitle()}
    </View>
    <View style={styles.slideFooter}>{card.footer()}</View>
  </View>
);

export default CardGenerator;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  slideHeader: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 24
  },
  slideBody: {
    flex: 2,
    paddingHorizontal: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  slideFooter: {
    flex: 1,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16
  }
});
