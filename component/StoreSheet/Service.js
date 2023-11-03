import { View, Text, Image } from 'react-native'
import React from 'react'

const Service = ({ name, src }) => (
    <View className="flex justify-center items-center mr-3">
        <Image source={src} className="w-10 h-10" />
        <Text className="font-semibold mt-1">{name}</Text>
    </View>
)

export default Service