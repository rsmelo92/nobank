import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CardGenerator from "./CardGenerator";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import SnapCarousel, { Pagination } from "react-native-snap-carousel";

const cards = [
  {
    header: {
      icon: () => <AntDesign name="creditcard" size={28} color="#4c4c4c" />
    },
    body: {
      title: () => (
        <Text
          style={[styles.bodyTitle, { color: "#42bdca", fontWeight: "bold" }]}
        >
          FATURA ATUAL
        </Text>
      ),
      value: () => (
        <Text style={[styles.bodyValue, { color: "#42bdca" }]}>
          R$ <Text style={{ fontWeight: "bold" }}>172</Text>,25
        </Text>
      ),
      subtitle: () => (
        <Text>
          Limite disponível{" "}
          <Text style={[styles.bodyLimit, { color: "#9dd230" }]}>
            R$ 146,50
          </Text>
        </Text>
      )
    },
    footer: () => (
      <React.Fragment>
        <AntDesign name="wallet" size={28} color="#666" />
        <Text style={styles.textSlideFooter}>
          Compra mais recente em Ifood*Ifood no valor de R$8,00 quinta
        </Text>
        <Entypo name="chevron-small-right" size={24} color="#666" />
      </React.Fragment>
    )
  },
  {
    header: {
      icon: () => <MaterialCommunityIcons name="coin" size={28} color="black" />
    },
    body: {
      title: () => <Text style={styles.bodyTitle}>Saldo disponível</Text>,
      value: () => <Text style={styles.bodyValue}>R$ 3.132,00</Text>,
      subtitle: () => {}
    },
    footer: () => (
      <React.Fragment>
        <Entypo name="cycle" size={28} color="#666" />
        <Text style={styles.textSlideFooter}>
          Transferência de R$ 260,00 feita para Zézé da souza sábado
        </Text>
        <Entypo name="chevron-small-right" size={24} color="#666" />
      </React.Fragment>
    )
  }
];

const getEachCard = index => {
  if (index === 0) {
    return;
  } else if (index === 1) {
    return <SecondCard />;
  } else {
    return <ThirdCard />;
  }
};

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeSlide: 0 };
    this._carousel = React.createRef();
  }

  renderItem({ item, index }) {
    console.log("item", item);

    return typeof item !== "string" ? (
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
    backgroundColor: "#ce54da"
  },
  dotContainer: {
    marginHorizontal: 2
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: "#fff"
  }
});
