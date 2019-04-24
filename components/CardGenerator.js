import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const CardGenerator = card => {
  console.log(card);
  return <View />;
  // return (
  //   <View style={styles.slide}>
  //     <View style={styles.slideHeader}>{card.header.icon()}</View>
  //     <View style={styles.slideBody}>
  //       {card.body.title()}
  //       {card.body.value()}
  //       {card.body.subtitle()}
  //     </View>
  //     <View style={styles.slideFooter}>{card.footer()}</View>
  //   </View>
  // );
};

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
  bodyTitle: {
    fontSize: 14
  },
  bodyValue: {
    fontSize: 34
  },
  bodyLimit: { fontWeight: "bold" },
  slideFooter: {
    flex: 1,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16
  },
  textSlideFooter: {
    flex: 1,
    padding: 20,
    fontSize: 14
  }
});
