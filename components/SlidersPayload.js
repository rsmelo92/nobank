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
      value: ({ invoice }) => {
        const splitInvoice = invoice.toString().split(".");
        return (
          <Text style={[styles.bodyValue, { color: "#42bdca" }]}>
            R$ <Text style={{ fontWeight: "bold" }}>{splitInvoice[0]}</Text>,
            {splitInvoice[1]}
          </Text>
        );
      },
      subtitle: ({ creditCardLimit }) => (
        <Text>
          Limite disponível{" "}
          <Text style={[styles.bodyLimit, { color: "#9dd230" }]}>
            R$ {creditCardLimit}
          </Text>
        </Text>
      )
    },
    footer: ({ lastPurchase }) => (
      <React.Fragment>
        <AntDesign name="wallet" size={28} color="#666" />
        <Text style={styles.textSlideFooter}>
          Compra mais recente em {lastPurchase.company} no valor de R${" "}
          {lastPurchase.value} quinta
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
      value: ({ balance }) => (
        <Text style={styles.bodyValue}>R$ {balance}</Text>
      ),
      subtitle: () => {}
    },
    footer: ({ transfer }) => (
      <React.Fragment>
        <Entypo name="cycle" size={28} color="#666" />
        <Text style={styles.textSlideFooter}>
          Transferência de R$ {transfer.value} feita para {transfer.name} sábado
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
      value: ({ rewardsPoints }) => (
        <Text style={[styles.bodyValue, { color: "#8f56c8" }]}>
          <Text style={{ fontWeight: "bold" }}>{rewardsPoints}</Text> pts
        </Text>
      ),
      subtitle: ({ lastAcumulatedPoints }) => (
        <Text style={{ maxWidth: 200 }}>
          Você acumulou{" "}
          <Text style={[styles.bodyLimit, { color: "#8f56c8" }]}>
            {lastAcumulatedPoints} pontos
          </Text>{" "}
          nos últimos 30 dias
        </Text>
      )
    },
    footer: ({ suggestionRewards }) => (
      <React.Fragment>
        <Feather name="briefcase" size={28} color="#666" />
        <Text style={styles.textSlideFooter}>
          Apagar compra de R$ {suggestionRewards.value} em Brasil Airlines com{" "}
          {suggestionRewards.points}pts
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
    fontSize: 13
  }
});
