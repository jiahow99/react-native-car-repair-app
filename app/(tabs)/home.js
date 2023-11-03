import { View, Text, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import VehicleInformation from '../../component/home/VehicleInformation'
import RepairServices from '../../component/home/RepairServices'
import StoresNearYou from '../../component/home/StoresNearYou'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FeatherIcons from 'react-native-vector-icons/Feather'
import StoreBottomSheet from '../../component/StoreSheet/StoreBottomSheet'

const home = () => {
  const bottomSheetComponent = useRef(null);

  const expandSheet = (store) => {
    bottomSheetComponent.current.expand(store);
  }
  
  return (
    <>
        <Stack.Screen options={{ headerShown: false }} />

        <SafeAreaView>
            <ScrollView className="py-5 bg-[#F6F6F6]">
              
              <View className="w-fit flex flex-row space-x-5 justify-center items-center mx-auto my-5">
                {/* Order History */}
                <View className="flex flex-row space-x-2">
                  <MaterialIcons name='history' size={30} />
                  <Text className=" font-bold">Order History</Text>
                </View>
                {/* Notifications */}
                <View className="flex flex-row space-x-2">
                  <FeatherIcons name="bell" size={28} />
                  <Text className=" font-bold">Notifications</Text>
                </View>
              </View>

              {/* Vehicle Information */}
              <VehicleInformation />

              {/* Repair Services */}
              <RepairServices />

              {/* Stores Near You */}
              <StoresNearYou expandSheet={expandSheet} />
            </ScrollView>

          <StoreBottomSheet ref={bottomSheetComponent} />
        </SafeAreaView>
    </>
  )
}

export default home