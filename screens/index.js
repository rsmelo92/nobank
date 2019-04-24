import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import AppTitle from "../components/AppTitle";
import Carousel from "../components/Carousel";

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
          <Carousel
            entries={[
              "Cobrar",
              "Cartão virtual",
              "Ajustar limite",
              "Transferir",
              "Bloquear cartão",
              "Depositar",
              "Pagar",
              "Indicar amigos",
              "Organizar atalhos"
            ]}
            itemWidth={100}
            itemHeight={100}
            sliderWidth={width}
            sliderHeight={100}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ce54da",
    alignItems: "center",
    justifyContent: "center"
  },
  mainCarousel: {
    height: height * 0.7
  },
  bottomCarousel: {
    flex: 1
  }
});
