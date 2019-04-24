import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SnapCarousel, { Pagination } from "react-native-snap-carousel";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeSlide: 0 };
    this._carousel = React.createRef();
  }

  renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <View style={styles.slideHeader} />
        <View style={styles.slideBody}>
          <Text>FATURA ATUAL</Text>
          <Text>R$ 172,25</Text>
          <Text>Limite disponível R$ 146,50</Text>
        </View>
        <View style={styles.slideFooter}>
          <Text style={styles.textSlideFooter}>
            Compra mais recente em Ifood*Ifood no valor de R$8,00 quinta
          </Text>
        </View>
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
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  paginationContainer: {
    backgroundColor: "#ce54da"
  },
  dotContainer: {
    marginHorizontal: 2
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: "#fff"
  },
  slideHeader: { flex: 1 },
  slideBody: {
    flex: 2,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  slideFooter: {
    flex: 1,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textSlideFooter: {
    flex: 1,
    padding: 20,
    fontSize: 14
  }
});
