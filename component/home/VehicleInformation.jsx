import { View, Text, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


const VehicleInformation = () => {
  return (
    <View className="mx-5 my-5 p-5 bg-opacity-70 bg-[#6B707A] rounded-lg" >
        <Text className="font-semibold text-xl text-white/60">Vehicle Information</Text>
        <Text className="font-bold text-xl">BMW 330i</Text>
        <View className="w-10/12 my-3 mx-auto flex justify-center items-center">
            <Image
            source={require('../../assets/images/bmw_blue.png')}
            className="w-full"
            />
        </View>
        <View className="w-full flex flex-row justify-between items-center">
          {/* Year */}
          <View className="flex flex-row items-center space-x-2">
            <FontAwesome5 name="car-alt" size={20} />
            <Text className="font-bold">2022</Text>
          </View>
          {/* Mileage */}
          <View className="flex flex-row items-center space-x-2">
            <SimpleLineIcons name="speedometer" size={20}  />
            <Text className="font-bold">90, 000</Text>
          </View>
        </View>
    </View>
  )
}

export default VehicleInformation