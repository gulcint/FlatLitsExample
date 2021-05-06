import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props) => (
  <TouchableOpacity
    onPress={() => props.onPress()}
    activeOpacity={0.8}
    style={{
      backgroundColor: "#4495cb",
      width: "90%",
      height: "10%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    }}
  >
    <Text
      style={{
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

export {Button};
