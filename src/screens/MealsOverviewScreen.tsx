
import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from '../../dummy-data'
import MealItem from '../components/MealItem'

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

  


    function renderMealItem(itemData){
        const item=itemData.item
        console.log(item)
        const mealItemProps = {
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            affordabilty:item.affordability,
            complexity:item.complexity,
            duration:item.duration
         
        };
  return (
<MealItem {...mealItemProps}   /> 
  )
    }
    
  return (
    <View style={styles.container}>
      <FlatList
      data={displayedMeals}
      keyExtractor={(item)=>item.id} // access item id and use that as a unique key
      renderItem={renderMealItem}
      showsVerticalScrollIndicator={false}
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