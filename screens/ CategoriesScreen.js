import { StyleSheet, Text, View, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import React from 'react'
import CategoryGridTile from '../components/CategoryGridTile'

const renderCategoryItem = ({ item }) => (
  <CategoryGridTile title={item.title} color={item.color} />
)

const CategoriesScreen = () => {
  console.log(CATEGORIES)
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})
