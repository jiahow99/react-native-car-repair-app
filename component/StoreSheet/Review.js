import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Review = ({ review }) => (
    <View className="w-40 flex flex-col justify-center items-center space-y-2 py-2 px-3 rounded-xl bg-[#4B515D]">
        <Image 
            source={{ 
                uri: 'https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
             }}
             className="w-14 h-14 rounded-full"
        />
        <View className="flex flex-row space-x-1">
            <AntDesign name='star' className="w-14 h-14" color={'#FFE24C'} />
            <AntDesign name='star' className="w-14 h-14" color={'#FFE24C'} />
            <AntDesign name='star' className="w-14 h-14" color={'#FFE24C'} />
            <AntDesign name='star' className="w-14 h-14" color={'#FFE24C'} />
            <AntDesign name='star' className="w-14 h-14" color={'#FFE24C'} />
        </View>
        <Text className="w-full font-semibold text-white text-sm" numberOfLines={2}>
            { review.comment }
        </Text>
        <Text className="text-white font-bold w-fit ml-auto">- John</Text>
    </View>
)

export default Review