import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Octicons,
  Feather
} from "@expo/vector-icons";
export const cards = [
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
  },
  {
    header: {
      icon: () => <Octicons name="gift" size={28} color="black" />
    },
    body: {
      title: () => null,
      value: () => (
        <Text style={[styles.bodyValue, { color: "#8f56c8" }]}>
          <Text style={{ fontWeight: "bold" }}>28.485</Text> pts
        </Text>
      ),
      subtitle: () => (
        <Text style={{ maxWidth: 200 }}>
          Você acumulou{" "}
          <Text style={[styles.bodyLimit, { color: "#8f56c8" }]}>
            2.248 pontos
          </Text>{" "}
          nos últimos 30 dias
        </Text>
      )
    },
    footer: () => (
      <React.Fragment>
        <Feather name="briefcase" size={28} color="#666" />
        <Text style={styles.textSlideFooter}>
          Apagar compra de R$ 268,53 em Brasil Airlines com 26.350pts
        </Text>
        <Entypo name="chevron-small-right" size={24} color="#666" />
      </React.Fragment>
    )
  }
];

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
