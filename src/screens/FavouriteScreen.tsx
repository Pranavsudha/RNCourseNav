import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { MEALS } from '../../dummy-data';
import { FavoriteContext } from '../../store/context/favoriteContext';
import MealsList from '../components/MealList/MealList';
import { useSelector } from 'react-redux';

function FavouriteScreen(){

  // const favoriteMealsCtx = useContext(FavoriteContext);
  const favoriteMeals = useSelector(state =>state.favoriteMeals.ids)
  console.log(favoriteMeals)

  if(favoriteMeals.length === 0){
    return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
    )
  }

  return (
    <MealsList items ={favoriteMeals}/>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({
rootContainer:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
},
text:{
  fontSize:30,
  fontWeight:"bold",
  color:"white"
}
})