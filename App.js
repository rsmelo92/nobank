import React from "react";
import { StyleSheet } from "react-native";
import { Font } from "expo";
import Main from "./screens";

const App = () => <Main style={styles.container} />;
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B008B",
    alignItems: "center",
    justifyContent: "center"
  }
});
