
import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { MEALS } from '../../dummy-data'
import MealItem from '../components/MealItem'

function MealsOverviewScreen({route}) {
    const catID = route.params.categoryID
    console.log(catID)

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0
    })


    function renderMealItem(itemData){
  return (
<MealItem title={itemData.item.title}/> 
  )
    }
    
  return (
    <View style={styles.container}>
      <FlatList
      data={displayedMeals}
      keyExtractor={(item)=>item.id} // access item id and use that as a unique key
      renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})