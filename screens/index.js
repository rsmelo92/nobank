import React from "react";
import { StyleSheet, View, Dimensions, FlatList, Text } from "react-native";
import AppTitle from "nb/components/AppTitle";
import BottomCarousel from "nb/components/BottomMenu";
import CardsSlider from "nb/components/CardsSlider";
import MenuMain from "nb/components/MenuMain";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const MAIN_CARD_HEIGHT_CALCULATION = height * 0.65; // 65% of screen height
const MAIN_CARD_WIDTH_CALCULATION = width * 0.9; // 90% of screen height

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppTitle />
        <View style={styles.menuContent}>
          <MenuMain />
          {/* <View style={styles.mainCarousel}>
          <CardsSlider />
        </View> */}
        </View>
        <View style={styles.bottomCarousel}>
          <BottomCarousel />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6D2177",
    alignItems: "center",
    justifyContent: "center"
  },
  menuContent: {
    height: MAIN_CARD_HEIGHT_CALCULATION,
    alignItems: "center"
  },
  mainCarousel: {
    height: MAIN_CARD_HEIGHT_CALCULATION,
    position: "absolute"
  },
  bottomCarousel: {
    flex: 1
  }
});
