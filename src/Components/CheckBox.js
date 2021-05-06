import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Checkbox = (props) => (
  <View style={{ flexDirection: "row" }}>
    <TouchableOpacity
      onPress={() => props.onPress()}
      activeOpacity={1}
      style={{
        width: 20,
        height: 20,
        borderWidth: 1,
        marginRight: 10,
        borderColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
      }}
    >
      {props.status && (
        <View
          style={{
            width: 15,
            height: 15,
            backgroundColor: "#4495cb",
            borderRadius: 3,
          }}
        />
      )}
    </TouchableOpacity>

    <Text>{props.text}</Text>
  </View>
);

export {Checkbox};
