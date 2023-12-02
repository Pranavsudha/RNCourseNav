import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryCardTitle = ({title,color,navigation,onPress}) => {

  return (
    <View style={[styles.gridItem]}>
     <Pressable android_ripple={{color:"#ccc"}} 
     style={({pressed})=> [styles.button, pressed ? styles.buttonPressed : null]}
     onPress={onPress}
     >
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
            <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>{title}</Text>
        </View>
     </Pressable>
    </View>
  )
}

export default CategoryCardTitle

const styles = StyleSheet.create({
    gridItem:{
        backgroundColor:"white",
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        shadowColor:"black",
        shadowOpacity:0.25,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:8,
        overflow:Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonPressed:{
        opacity:0.5
    }


})
