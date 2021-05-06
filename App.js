import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Input, Button } from "./src/Components";

const App = (props) => {
  const [title, setTitle] = useState("");
  const [dsc, setDsc] = useState("");

  const [data, setData] = useState([
    { id: 1, title: "1.toplantı", dsc: "Sabah 9:00   toplantı" },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <FlatList
          styles={{ flex: 1 }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        ></FlatList>

        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            padding: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Input
            placeholder="Title"
            value={title}
            onChangeText={(value) => setTitle(value)}
          />

          <Input
            placeholder="Description"
            value={dsc}
            onChangeText={(value) => setDsc(value)}
          />

          <Button
            text={"Add"}
            onPress={() => {
              console.log("inputTitle", title);
              console.log("inputDesc", dsc);
              console.log("inputIndex", data.length);
              // we are copied userArr
              // let arr = data;
              // let obj = {
              //   id: data.length,
              //   title,
              //   dsc,
              // };
              // data.push(obj);
              // setData(arr);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  item: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default App;
