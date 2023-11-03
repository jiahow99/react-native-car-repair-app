import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const ChooseService = () => {
    // Service Component
    const ServiceComponent = ({ name, src }) => (
        <LinearGradient
            colors={['#7C8089', '#4B515D']}
            className="w-full h-44 rounded-lg relative py-2 px-5  mb-4"
        >
            <Image source={src} className="ml-auto w-[150px] h-[130px]" />
            <Text className="absolute bottom-5 left-3 text-xl text-white font-bold tracking-widest">
                {name}
            </Text>
        </LinearGradient>
    )
        

return (
    <View className="w-full mx-8 flex flex-col">
        <ServiceComponent name="Car Repair" src={require('../../assets/images/choose_car_repair.png')} />
        <ServiceComponent name="Tyre Change" src={require('../../assets/images/tyre_change.png')} />
    </View>
)
}

export default ChooseService