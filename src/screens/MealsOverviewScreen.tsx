
import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from '../../dummy-data'
import MealItem from '../components/MealList/MealItem'
import MealsList from '../components/MealList/MealList'



function MealsOverviewScreen({route,navigation}) {
    const catID = route.params.categoryID
    console.log(catID)

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0
    })

    useLayoutEffect(()=>{
      const categoryTitle = CATEGORIES?.find((category) => category.id === catID).title;
      navigation.setOptions({
        title:categoryTitle
          })
    },[catID,navigation])

  return <MealsList items={displayedMeals}/>

  }
export default MealsOverviewScreen

const styles = StyleSheet.create({
    
})