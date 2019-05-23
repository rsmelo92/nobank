import React, { Component } from "react";
import { StyleSheet, FlatList, Dimensions, View } from "react-native";
import { createFragmentContainer, graphql } from "react-relay";

import { cards } from "nb/components/SlidersPayload";
import CardGenerator from "nb/components/CardGenerator";

const width = Dimensions.get("window").width;
const MAIN_CARD_WIDTH_CALCULATION = width * 0.9; // 90% of screen height

class CardsSlider extends Component {
  render() {
    // const {
    //   balance,
    //   creditCardLimit,
    //   invoice,
    //   lastAcumulatedPoints,
    //   lastPurchase,
    //   rewardsPoints,
    //   suggestionRewards
    // } = this.props.user;
    console.log(this.props);

    return (
      <FlatList
        horizontal
        keyExtractor={(item, index) => `${item}_${index}`}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // data={[
        //   {
        //     bodyData: {
        //       invoice,
        //       creditCardLimit
        //     },
        //     footerData: {
        //       lastPurchase
        //     }
        //   },
        //   {
        //     bodyData: {
        //       balance
        //     },
        //     footerData: {
        //       lastPurchase
        //     }
        //   },
        //   {
        //     bodyData: {
        //       rewardsPoints,
        //       lastAcumulatedPoints
        //     },
        //     footerData: {
        //       suggestionRewards
        //     }
        //   }
        // ]}
        renderItem={({ item, index }) => (
          <View style={styles.mainItem}>
            <CardGenerator card={cards[index]} cardContent={item} />
          </View>
        )}
      />
    );
  }
}

const CardsSliderContainer = createFragmentContainer(CardsSlider, {
  user: graphql`
    fragment CardsSlider_user on User {
      invoice
      creditCardLimit
      lastPurchase {
        company
        value
      }
      balance
      rewardsPoints
      lastAcumulatedPoints
      suggestionRewards {
        value
        points
      }
    }
  `
});

export default CardsSliderContainer;

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
