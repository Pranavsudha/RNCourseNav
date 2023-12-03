import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function List({data}){
  return data?.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
 <Text style={styles.itemText} >{dataPoint}</Text>
    </View>
    ))
}

export default List

const styles = StyleSheet.create({
   listItem:{
    borderRadius:8,
    paddingHorizontal:8,
    paddingVertical:4,
    marginVertical:4,
    marginHorizontal:12,
    marginTop:10,
    backgroundColor:"#e2b497"
   },
   itemText:{
    color:'white',
    textAlign:"center"
   }
})