import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RecipeViewer from './src/component/find.js';
import { Provider } from 'react-redux';
import store from './src/store/index.js';



export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Text>What are you looking At !</Text>
      <RecipeViewer />
      <StatusBar style="auto" />
    </View>
    </Provider>
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
