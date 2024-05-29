import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'

const Page = () => {
  const [category,setCategory] = useState('Tiny homes')
  const onDataChanged = (category:string)=>{
    console.log('CHANGED 카테고리 : ',category)
    setCategory(category)
  }
  return (
    <View style={{ flex: 1, marginTop: 160 }}>
      <Stack.Screen
        options={{
          header:()=><ExploreHeader onCategoryChanged={onDataChanged}  />
        }}
      />
      <Listings listings={[]} category={category} />
    </View>
  )
}

export default Page