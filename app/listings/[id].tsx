import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Page = () => {
    const {id} = useLocalSearchParams<{id:string}>()
    console.log('listings id',id)
  return (
    <View>
      <Text>리스트 페이지</Text>
    </View>
  )
}

export default Page