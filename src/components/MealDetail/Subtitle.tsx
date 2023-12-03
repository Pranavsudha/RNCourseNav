import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Subtitle({children}){
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subText}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleContainer:{
        padding:6,
        marginHorizontal:24,
        borderBottomColor:"white",
        borderBottomWidth:2
       },
       subText:{
        color:"white",textAlign:"center",fontSize:20
       }
})