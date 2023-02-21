import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId
  return (
    <View>
      <Text>MealsOverviewScreen - {route.params.categoryId}</Text>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({})
