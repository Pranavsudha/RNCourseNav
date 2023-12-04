import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../../dummy-data";

import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../../store/context/favoriteContext";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite,removeFavorite } from "../../store/redux/favorites";

const MealsItemScreen = ({ route,navigation }) => {
  const favoriteMealsIds = useSelector((state)=> state.favoriteMeals.ids);
  const dispatch=useDispatch();
  const favoritemealsCtx = useContext(FavoriteContext)
  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  console.log(mealID);

  const mealIsFavorite = favoritemealsCtx.ids.includes(mealID)

  function changeFavoriteStatusHandler() {
  if (mealIsFavorite){
    // favoritemealsCtx.removeFavorite(mealID);
    dispatch(removeFavorite({id:mealID}))
  } else{
    dispatch(addFavorite({id:mealID}))
  }
  }

  function headerButtonPressHandler() {
    console.log('Pressed')
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=>{
            return <IconButton onPress={headerButtonPressHandler} icon={'star'} color={'white'} />
        }
    })
  },[navigation,headerButtonPressHandler])

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        textStyle={{ color: "white" }}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>

          <List data={selectedMeal?.ingredients} />

          <Subtitle>Steps</Subtitle>

          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsItemScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 50,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
