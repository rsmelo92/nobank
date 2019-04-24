import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

const ThirdCard = () => {
  return (
    <View style={styles.slide}>
      <View style={styles.slideHeader}>
        <Octicons name="gift" size={28} color="black" />
      </View>
      <View style={styles.slideBody}>
        <Text style={styles.bodyValue}>
          <Text style={{ fontWeight: "bold" }}>28.485</Text> pts
        </Text>
        <Text style={{ maxWidth: 200 }}>
          Você acumulou <Text style={styles.bodyLimit}>2.248 pontos</Text> nos
          últimos 30 dias
        </Text>
      </View>
      <View style={styles.slideFooter}>
        <Text style={styles.textSlideFooter}>
          Apagar compra de R$ 268,53 em Brasil Airlines com 26.350pts
        </Text>
      </View>
    </View>
  );
};

export default ThirdCard;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  slideHeader: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 24
  },
  slideBody: {
    flex: 2,
    paddingHorizontal: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  bodyTitle: {
    color: "#42bdca",
    fontWeight: "bold",
    fontSize: 14
  },
  bodyValue: {
    color: "#8f56c8",
    fontSize: 34
  },
  bodyLimit: {
    fontWeight: "bold",
    color: "#8f56c8"
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
