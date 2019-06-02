import React from "react";
import { Text } from "react-native";

const HalfBold = ({ text, boldText, style, boldStyle }) => {
  return (
    <Text style={style}>
      {text + " "}
      <Text style={[boldStyle, { fontWeight: "bold" }]}>{boldText}</Text>
    </Text>
  );
};

export default HalfBold;
