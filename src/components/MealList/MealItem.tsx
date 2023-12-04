import { Pressable, StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem({ id,title, imageUrl,duration,complexity,affordabilty,onPress }) {
    const navigation=useNavigation();


  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:"#ccc"}}  style={({pressed})=>  pressed ? styles.buttonPressed : null} onPress={()=>navigation.navigate('MealsItemScreen',{mealID:id})}  >
        <View style={styles.innerContainer}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        </View>
       <MealDetails duration={duration} complexity={complexity} affordability={affordabilty}/>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:200
    },
    title:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold"
    },
    mealItem:{
        margin:16,
        borderRadius:8,
        backgroundColor:"white",
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
   
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.5
    }
});
