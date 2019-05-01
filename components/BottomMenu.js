import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import BottomItems from "./BottomMenuItens";

const BottomMenu = () => {
  return (
    <FlatList
      horizontal
      keyExtractor={(item, index) => `${item}_${index}`}
      showsHorizontalScrollIndicator={false}
      data={BottomItems}
      renderItem={({ item, index }) => {
        const { icon, text } = item;
        return (
          <View
            style={[styles.menuItemsWrapper, index === 0 && { marginLeft: 12 }]}
          >
            <View style={styles.menuItemsIcon}>{icon}</View>
            <Text style={styles.menuItemsText}>{text}</Text>
          </View>
        );
      }}
    />
  );
};

export default BottomMenu;

const styles = StyleSheet.create({
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
