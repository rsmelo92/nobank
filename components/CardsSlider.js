import React, { Component } from "react";
import { StyleSheet, FlatList, Dimensions, View } from "react-native";
import CardGenerator from "nb/components/CardGenerator";
import { cards } from "nb/components/SlidersPayload";

const width = Dimensions.get("window").width;
const MAIN_CARD_WIDTH_CALCULATION = width * 0.9; // 90% of screen height

export default class CardsSlider extends Component {
  render() {
    return (
      <FlatList
        horizontal
        keyExtractor={(item, index) => `${item}_${index}`}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3]}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.mainItem}>
              <CardGenerator card={cards[index]} />
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainItem: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    width: MAIN_CARD_WIDTH_CALCULATION
  }
});
