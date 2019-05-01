import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardGenerator from "./CardGenerator";
import { cards } from "./SlidersPayload";

import SnapCarousel, { Pagination } from "react-native-snap-carousel";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeSlide: 0 };
    this._carousel = React.createRef();
  }

  renderItem({ item, index }) {
    return typeof item !== "string" && cards[index] ? (
      <CardGenerator card={cards[index]} />
    ) : (
      <View style={styles.slide}>
        <Text>eita</Text>
      </View>
    );
  }

  render() {
    const {
      entries,
      itemWidth,
      itemHeight,
      sliderWidth,
      sliderHeight,
      hasPagination
    } = this.props;
    const { activeSlide } = this.state;
    return (
      <View>
        <SnapCarousel
          ref={this._carousel}
          data={entries}
          renderItem={this.renderItem}
          itemWidth={itemWidth}
          itemHeight={itemHeight}
          sliderWidth={sliderWidth}
          sliderHeight={sliderHeight}
          onSnapToItem={index =>
            hasPagination && this.setState({ activeSlide: index })
          }
        />
        {hasPagination && (
          <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.dot}
            dotContainerStyle={styles.dotContainer}
            inactiveDotOpacity={0.4}
            inactiveDotScale={1}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: "#924ba9",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  paginationContainer: {
    backgroundColor: "transparent"
  },
  dotContainer: {
    marginHorizontal: 2,
    height: 10
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: "#fff"
  },
  bodyTitle: {
    fontSize: 14
  },
  bodyValue: {
    fontSize: 34
  },
  bodyLimit: {
    fontWeight: "bold"
  },
  textSlideFooter: {
    flex: 1,
    padding: 20,
    fontSize: 14
  }
});
