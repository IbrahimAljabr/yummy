import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { dummyData } from "../data/data";
import Carousel from "./carousel";
import Find from "./find";
import FindByMax from "./findByMax";
import Recipes from './recipe.js';
import { Button } from 'react-native-elements';
// const { width, height } = Dimensions.get("window");


const { width, height } = Dimensions.get("window");

export default function App({ navigation }) {
  return (
    <View>


      <View>
        <Carousel data={dummyData} />
      </View>
      <View style={styles.find}>
        <Find />
        <Button buttonStyle={{
          width: width - 30,
          height: 140, marginLeft: 10, marginBottom: 100,  backgroundColor:"#fff"
        }}
          onPress={() =>
            navigation.navigate('Find Recipes')
          }
        />
      </View>
      <View style={styles.findByMax}>
        <FindByMax />
        <Button buttonStyle={{
          width: width - 30,
          height: 140, marginLeft: 10, marginBottom: 100,  backgroundColor:"#fff"
        }}
          onPress={() =>
            navigation.navigate('By Max Calories')
          }
        />
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
