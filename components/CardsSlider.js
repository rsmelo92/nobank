import React, { Component } from "react";
import { StyleSheet, FlatList, Dimensions, View } from "react-native";
import CardGenerator from "nb/components/CardGenerator";
import { cards } from "nb/components/SlidersPayload";
import { createFragmentContainer, graphql } from "react-relay";
import createRelayQueryRenderer from "nb/hoc/queryRenderer";

const width = Dimensions.get("window").width;
const MAIN_CARD_WIDTH_CALCULATION = width * 0.9; // 90% of screen height

class CardsSlider extends Component {
  render() {
    console.log(this.props);
    const {
      balance,
      creditCardLimit,
      invoice,
      lastAcumulatedPoints,
      lastPurchase,
      name,
      rewardsPoints,
      suggestionRewards
    } = this.props.user;

    return (
      <FlatList
        horizontal
        keyExtractor={(item, index) => `${item}_${index}`}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={[
          {
            bodyData: {
              invoice,
              creditCardLimit
            },
            footerData: {
              lastPurchase
            }
          },
          {
            bodyData: {
              balance
            },
            footerData: {
              lastPurchase
            }
          },
          {
            bodyData: {
              rewardsPoints,
              lastAcumulatedPoints
            },
            footerData: {
              suggestionRewards
            }
          }
        ]}
        renderItem={({ item, index }) => {
          console.log("item==>", item);

          return (
            <View style={styles.mainItem}>
              <CardGenerator card={cards[index]} cardContent={item} />
            </View>
          );
        }}
      />
    );
  }
}

const CardsContainer = createFragmentContainer(CardsSlider, {
  user: graphql`
    fragment CardsSlider_user on User {
      id
      name
    }
  `
});

const CardsQuery = graphql`
  query CardsSliderQuery {
    user {
      ...CardsSlider_user
    }
  }
`;

export default createRelayQueryRenderer(CardsContainer, {
  query: CardsQuery
});

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
