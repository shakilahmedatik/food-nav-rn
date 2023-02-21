import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter(
    mealItem => mealItem.categoryIds.indexOf(catId) >= 0
  )
  const renderMealItem = ({ item }) => {
    return <MealItem item={item} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
})
