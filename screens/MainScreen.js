import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Text,
  Animated
} from "react-native";
import AppTitle from "nb/components/AppTitle";
import BottomCarousel from "nb/components/BottomMenu";
import CardsSlider from "nb/components/CardsSlider";
import MenuMain from "nb/components/MenuMain";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";
import createRelayQueryRenderer from "nb/hoc/queryRenderer";

import { graphql, createFragmentContainer } from "react-relay";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const MAIN_CARD_HEIGHT_CALCULATION = height * 0.68; // 68% of screen height
const MAIN_CARD_WIDTH_CALCULATION = width * 0.9; // 90% of screen height

class Main extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    opacityBottom: new Animated.Value(1),
    translateY: new Animated.Value(0)
  };

  animate(toValue) {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(this.state.opacityBottom, {
        toValue: !!toValue ? 0 : 1,
        duration: 300
      }),
      Animated.spring(this.state.translateY, {
        toValue: !!toValue ? MAIN_CARD_HEIGHT_CALCULATION : 0,
        duration: 300,
        useNativeDriver: true
      })
    ]).start();
  }

  render() {
    const { opacity, opacityBottom, translateY } = this.state;
    const { name } = this.props.user;

    return (
      <View style={styles.container}>
        <AppTitle userName={name} />
        <Animated.View style={[styles.mainMenu, { opacity }]}>
          <MenuMain />
        </Animated.View>
        <GestureRecognizer
          onSwipeUp={state => this.animate(0)}
          onSwipeDown={state => this.animate(1)}
          config={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          }}
          style={styles.cardsGestureWrapper}
        >
          <View style={styles.menuContent}>
            <Animated.View
              style={[styles.mainCarousel, { transform: [{ translateY }] }]}
            >
              <CardsSlider />
            </Animated.View>
          </View>
          <Animated.View
            style={[styles.bottomCarousel, { opacity: opacityBottom }]}
          >
            <BottomCarousel />
          </Animated.View>
        </GestureRecognizer>
      </View>
    );
  }
}

export default createRelayQueryRenderer(Main, {
  query: graphql`
    query MainScreenQuery {
      user {
        name
        ...CardsSlider_user
      }
    }
  `
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#6D2177",
    backgroundColor: "#841584",
    alignItems: "center",
    justifyContent: "center"
  },
  cardsGestureWrapper: {
    position: "absolute",
    bottom: 0
  },
  menuContent: {
    height: MAIN_CARD_HEIGHT_CALCULATION,
    alignItems: "center"
  },
  mainCarousel: {
    height: MAIN_CARD_HEIGHT_CALCULATION
  },
  mainMenu: {
    flex: 1
  },
  bottomCarousel: {
    flex: 1
  }
});
