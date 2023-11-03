import { View, Text } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const ProfileTab = ({ focused }) => {
  return (
    <View className={`${focused && 'bg-white'} flex-row justify-center items-center space-x-1 rounded-full px-3 py-1`}>
        <Feather name="user" size={20} color={!focused && '#ffffff'}  />
        {focused && <Text className="font-bold">me</Text>}
    </View>
  )
}

export default ProfileTab