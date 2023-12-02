import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES, categories, data } from "../../dummy-data";
import CategoryCardTitle from "../components/CategoryCardTitle";

function CategoryScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverviewScreen',{
        categoryID:itemData.item.id
      });
    }
    return (
      <CategoryCardTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}

      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({});
