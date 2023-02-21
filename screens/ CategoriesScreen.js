import { StyleSheet, Text, View, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import React from 'react'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('Meals Overview')
  }

  const renderCategoryItem = ({ item }) => (
    <CategoryGridTile
      title={item.title}
      color={item.color}
      onPress={pressHandler}
    />
  )
  console.log(navigation)
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})
