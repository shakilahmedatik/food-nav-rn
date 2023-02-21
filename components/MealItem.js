import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealItem = ({ item }) => {
  console.log(item.title)
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({})
