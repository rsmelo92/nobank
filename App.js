import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./screens";

export default function App() {
  return <Main style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ce54da",
    alignItems: "center",
    justifyContent: "center"
  }
});
