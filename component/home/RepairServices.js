import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const RepairServices = () => {

    // Service Component
    const ServiceComponent = ({ name, src, imgWidth, imgHeight, textWidth='w-full' }) => (
        <LinearGradient
            colors={['#7C8089', '#4B515D']}
            className="p-3 rounded-lg w-44 h-40 flex flex-row justify-between relative mr-3"
        >
            <Text style={{ lineHeight: 20 }} className={`${textWidth} absolute bottom-3 left-3 text-lg font-bold text-white leading-none`}>
                {name}
            </Text>
            <Image 
                source={src}
                className={`ml-auto ${imgWidth} ${imgHeight}`}
            />
        </LinearGradient>
    )

    return (
        <View className="ml-5 my-5" >
            <Text className="text-xl font-bold">Repair Services</Text>
            <ScrollView horizontal={true} className="mt-4 flex flex-row space-x-5" showsHorizontalScrollIndicator={false}>
                {/* Request Mechanic */}
                <ServiceComponent 
                    name='Request Mechanic' 
                    src={require("../../assets/images/request_mechanic.png")} 
                    imgWidth='w-[52px]' imgHeight='h-[120px]'
                />

                {/* Tyre Change */}
                <ServiceComponent 
                    name='Tyre Change' 
                    src={require("../../assets/images/tyre_change.png")}
                    imgWidth='w-[110px]' imgHeight='h-[110px]'
                />

                {/* Purchase Spare Parts */}
                <ServiceComponent 
                    name='Spare Parts' 
                    src={require("../../assets/images/tyre_change.png")}
                    imgWidth='w-[90px]' imgHeight='h-[110px]'
                />
            </ScrollView>
        </View>
    )
}


export default RepairServices