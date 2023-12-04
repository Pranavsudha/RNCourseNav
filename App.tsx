import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Button } from "react-native";
import CategoryScreen from "./src/screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsItemScreen from "./src/screens/MealsItemScreen";
import MealDetails from "./src/components/MealDetails";
import FavouriteScreen from "./src/screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React from "react";
import FavoriteContextProvider from "./store/context/favoriteContext";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "black" },
          }}
        >
          <Stack.Screen
            name="CategoryScreen"
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
            options={{
              title: "MealsOverview",
              headerBackTitle: 'Back', // Set the back button text
            }}
          />
            <Stack.Screen
            name="MealsItemScreen"
            component={MealsItemScreen}
            options={{
              headerRight:() =>{
               return  <Button title='Tap Me'/>
              }
             }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
