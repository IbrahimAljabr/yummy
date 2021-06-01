import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { dummyData } from "../data/data";
import Carousel from "./carousel";
import Find from "./find";
import FindByMax from "./findByMax";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View>
      <View>
        <Carousel data={dummyData} />
      </View>
      <View style={styles.find}>
        <Find />
      </View>
      <View style={styles.findByMax}>
        <FindByMax />
      </View>
      <View>
        <StatusBar style='auto' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  find: {
    height: height / 4.4,
  },
  findByMax: {
    height: height / 4.4,
  },
});
