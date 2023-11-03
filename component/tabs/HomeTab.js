import React from 'react'
import { Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const HomeTab = ({ focused }) => {
  return (
    <View className={`${focused && 'bg-white'} flex-row justify-center items-center space-x-1 rounded-full px-3 py-1`}>
        <Feather name="home" size={20} color={!focused && '#ffffff'}  />
        {focused && <Text className="font-bold">home</Text>}
    </View>
  )
}

export default HomeTab