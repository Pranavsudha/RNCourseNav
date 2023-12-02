import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './src/screens/CategoryScreen';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

export default function App() {
  return (
<>
    <StatusBar style='light'/>
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="MealsOverviewScreen" component={MealsOverviewScreen} />
    </Stack.Navigator>
    </NavigationContainer>
</>
  );
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  marginTop:50
 }
});
