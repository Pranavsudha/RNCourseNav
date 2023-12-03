import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Button } from "react-native";
import CategoryScreen from "./src/screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsItemScreen from "./src/screens/MealsItemScreen";
import MealDetails from "./src/components/MealDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
