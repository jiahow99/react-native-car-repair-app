import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Steps from '../../component/repair/Steps'
import ChooseService from '../../component/repair/ChooseService'
import WhatTroublesYou from '../../component/repair/WhatTroublesYou'
import ChooseMechanic from '../../component/repair/ChooseMechanic'
import { ScrollView } from 'react-native'
import { Stack } from 'expo-router'
import BackButton from '../../component/BackButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const repair = () => {
  const [steps, setSteps] = useState(3);
  
  return (
    <SafeAreaView>
      <ScrollView className="bg-[#F6F6F6]">
        <Stack.Screen options={{headerShown: false}} />

        {/* Back button */}
        {steps !== 1 && (
          <View className="w-11/12 mx-auto my-3">
            <BackButton steps={steps} onPress={() => setSteps(steps - 1)} />
          </View>
        )}

        {/* Title */}
        <Text className="w-8/12 mx-auto text-2xl font-bold text-center">
          Choose the service you need
        </Text>
        
        {/* Steps */}
        <Steps />

        {/* Choose service */}
        {steps === 1 && <ChooseService  />}
        
        {/* What troubles you */}
        {steps === 2 && <WhatTroublesYou  />}

        {/* Choose mechanic */}
        {steps === 3 && <ChooseMechanic  />}

      </ScrollView>
    </SafeAreaView>
  )
}

export default repair