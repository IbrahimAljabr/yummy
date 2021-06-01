import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Recipes from './src/component/recipe.js';
// import { Provider } from 'react-redux';
// import store from './src/store/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>What are you looking At !</Text>
3      <Recipes />
      <StatusBar style="auto" />
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
});
