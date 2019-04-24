import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SecondCard = () => {
  return (
    <View style={styles.slide}>
      <View style={styles.slideHeader}>
        <MaterialCommunityIcons name="coin" size={28} color="black" />
      </View>
      <View style={styles.slideBody}>
        <Text style={styles.bodyTitle}>Saldo disponível</Text>
        <View style={{ backgroundColor: "#eee" }}>
          <Text style={styles.bodyValue}>R$ 3.132,00</Text>
        </View>
      </View>
      <View style={styles.slideFooter}>
        <Text style={styles.textSlideFooter}>
          Transferência de R$ 260,00 feita para Zézé da souza sábado
        </Text>
      </View>
    </View>
  );
};

export default SecondCard;

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
    fontSize: 16
  },
  bodyValue: {
    color: "#000",
    fontSize: 34
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
