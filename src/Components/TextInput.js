import React from "react";
import { TextInput, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Input = (props) => (
  <TextInput
    placeholder={props.placeholder}
    secureTextEntry={props.secureTextEntry}
    keyboardType={props.keyboardType}
    value={props.value}
    onChangeText={(value) => props.onChangeText(value)}
    style={[
      {
        width: "90%",
        height: "15%",
        backgroundColor: "#ededed",
        borderWidth: 0.5,
        borderColor: "gray",
        borderRadius: 7,
        paddingLeft: 10,
        marginBottom: height * 0.02,
      },
      props.style,
    ]}
  />
);

export { Input };
