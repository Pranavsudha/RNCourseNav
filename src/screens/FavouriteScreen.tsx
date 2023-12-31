import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { MEALS } from '../../dummy-data';
import { FavoriteContext } from '../../store/context/favoriteContext';
import MealsList from '../components/MealList/MealList';

function FavouriteScreen(){
  const favoriteMealsCtx = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter(Meal => favoriteMealsCtx.ids.includes(Meal.id))
  console.log(favoriteMeals)

  return (
    <MealsList items ={favoriteMeals}/>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({})