import { View, Text } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const About = ({ name, rate }) => (
    <View className="px-3 py-1 border-2 border-gray-400 rounded-lg flex flex-row items-center justify-center space-x-2 mr-3">
        <View>
            <Text className="font-semibold">{name}</Text>
            <Text className="text-xl font-bold">{rate}</Text>
        </View>
        {name === 'Ratings' && <AntDesign name='star' size={30} color={'#FFE24C'} />}
        {name === 'Reviews' && <Octicons name='comment' size={30} />}
        {name === 'Respond Rate' && <Feather name='activity' size={30} />}            
    </View>
)

export default About