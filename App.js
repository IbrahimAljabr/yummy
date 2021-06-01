import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/component/home";
import RecipeScreen from "./src/component/recipe"
import CaloryScreen from "./src/component/calory"
// import { StyleSheet, Text, View } from "react-native";
// // import Recipes from './src/component/recipe.js';
// // import { Provider } from 'react-redux';
// // import store from './src/store/index.js';

// export default function App() {
//   return (
//     <View>
//         <Home />
//     </View>
//   );
// }

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'home',headerShown: false }}
        />
        <Stack.Screen name="Find Recipes" component={RecipeScreen} />
        <Stack.Screen name="By Max Calories" component={CaloryScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack ;