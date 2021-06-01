import React from "react";
import Home from "./src/component/home";
import { StyleSheet, Text, View } from "react-native";
import Recipes from './src/component/recipe.js';
// import { Provider } from 'react-redux';
// import store from './src/store/index.js';

export default function App() {
  return (
    <View style={styles.container}>
        <Home />
      <Text>What are you looking At !</Text>
     <Recipes />
      <StatusBar style="auto" />
    </View>
  );
}
