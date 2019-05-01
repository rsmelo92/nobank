import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import AppTitle from "nb/components/AppTitle";
import CardGenerator from "nb/components/CardGenerator";
import Carousel from "nb/components/Carousel";
import BottomCarousel from "nb/components/BottomMenu";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppTitle />
        <View style={styles.mainCarousel}>
          <Carousel
            entries={[1, 2, 3]}
            itemWidth={width * 0.9}
            sliderWidth={width}
            hasPagination
          />
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
  mainCarousel: {
    height: height * 0.65
  },
  bottomCarousel: {
    flex: 1
  }
});
