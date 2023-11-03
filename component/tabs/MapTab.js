import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MapTab = () => {
  return (
    <View className='flex-row justify-center items-center space-x-1 rounded-full px-3 py-1'>
        <MaterialCommunityIcons name="navigation-outline" size={20} color={'#ffffff'} />
    </View>
  )
}

export default MapTab