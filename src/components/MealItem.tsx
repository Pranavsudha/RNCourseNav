import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function MealItem({title})  {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({})