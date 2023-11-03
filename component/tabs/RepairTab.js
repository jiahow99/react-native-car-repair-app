import { View, Text, Image } from 'react-native'
import React from 'react'

const RepairTab = ({ focused }) => {
  return (
    <View className={`${focused && 'bg-white'} flex-row justify-center items-center space-x-1 rounded-full px-3 py-1`}>
        {focused 
        ? 
            <Image 
                source={require('../../assets/icons/repair-tab-active.png')}
                className="w-5 h-5"
            />
        :
            <Image 
                source={require('../../assets/icons/repair-tab.png')}
                className="w-5 h-5"
            />
        }
        
        {focused && <Text className="font-bold">repair</Text>}
    </View>
  )
}

export default RepairTab