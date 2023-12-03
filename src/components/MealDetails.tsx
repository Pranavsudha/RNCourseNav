import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function MealDetails({duration,complexity,affordability,style,textStyle}) {
  return (
    <View style={[styles.descContainer,style]}>
            <Text style={[styles.detailItem,textStyle]}>{duration}</Text>
            <Text style={[styles.detailItem,textStyle]}>{complexity}</Text>
            <Text style={[styles.detailItem,textStyle]}>{affordability}</Text>
        </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
    descContainer:{
        flexDirection:"row",
        justifyContent:"center", //Flex Direction to row justify content positions items along main axis
        padding:15,
    
    },
    detailItem:{
        marginHorizontal:5,
    },
})