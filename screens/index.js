import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import AppTitle from "nb/components/AppTitle";
import { cards } from "nb/components/SlidersPayload";
import CardGenerator from "nb/components/CardGenerator";
import Carousel from "nb/components/Carousel";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Octicons,
  Feather
} from "@expo/vector-icons";

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
          <FlatList
            horizontal
            keyExtractor={(item, index) => `${item}_${index}`}
            showsHorizontalScrollIndicator={false}
            data={[
              "Indicar amigos",
              "Depositar",
              "Transferir",
              "Pagar",
              "Ajustar limite",
              "Bloquear cartão",
              "Cartão virtual",
              "Organizar atalhos"
            ]}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.menuItemsWrapper,
                  index === 0 && { marginLeft: 12 }
                ]}
              >
                <View style={styles.menuItemsIcon}>
                  <AntDesign name="creditcard" size={22} color="#fff" />
                </View>
                <Text style={styles.menuItemsText}>{item}</Text>
              </View>
            )}
          />
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
  },
  menuItemsWrapper: {
    width: 86,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    marginHorizontal: 4,
    marginBottom: 20,
    padding: 8,
    justifyContent: "flex-end"
  },
  menuItemsIcon: {
    alignContent: "flex-start",
    flex: 1
  },
  menuItemsText: {
    color: "#fff",
    fontSize: 14
  }
});
