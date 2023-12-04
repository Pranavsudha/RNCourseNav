import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Button } from "react-native";
import CategoryScreen from "./src/screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation(){
  return <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: "#351401" },
  headerTintColor: "white",
  sceneContainerStyle: { backgroundColor: "#3f2f25" },
  drawerContentStyle:{backgroundColor:'#351401'},
  drawerInactiveTintColor:"white",
  drawerActiveTintColor:"#351401",
  drawerActiveBackgroundColor:"#e4baa1"
}}
   >
    <Drawer.Screen name="Categories" component={CategoryScreen}  options={{
              title: "All Categories",
             drawerIcon: ({ color, size }) => (
              <MaterialIcons name="category" size={24} color="white" />
              ),
            }}  />
    <Drawer.Screen name="Favorites" component={FavouriteScreen}  options={{
              title: "Favorites",
             drawerIcon: ({ color, size }) => (
              <Entypo name="star" size={24} color="white" />
              ),
            }}  />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{ headerStyle: { backgroundColor: "#351401" },
         headerTintColor: "white",
         contentStyle:{backgroundColor:'#351401'},
  }}
        >
          <Stack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{
              title: "All Categories",
              headerShown:false
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
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
