import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const CardGenerator = ({ card, cardContent: { bodyData, footerData } }) => (
  <View style={styles.slide}>
    <View style={styles.slideHeader}>{card.header.icon()}</View>
    <View style={styles.slideBody}>
      {card.body.title()}
      {card.body.value(bodyData)}
      {card.body.subtitle(bodyData)}
    </View>
    <View style={styles.slideFooter}>{card.footer(footerData)}</View>
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
