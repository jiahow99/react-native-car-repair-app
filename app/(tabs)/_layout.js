import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'
import HomeTab from '../../component/tabs/HomeTab'
import RepairTab from '../../component/tabs/RepairTab'
import MapTab from '../../component/tabs/MapTab'
import ProfileTab from '../../component/tabs/ProfileTab'

const _layouts = () => {
  return (
    <Tabs screenOptions={{ tabBarStyle: {
      backgroundColor: '#424242',
      height: 70
    }}}>
      <Tabs.Screen 
        name="home" 
        options={{ 
          tabBarIcon: ({focused}) => <HomeTab focused={focused} />,
          tabBarShowLabel: false,
        }}     
      />

      <Tabs.Screen 
        name="repair" 
        options={{ 
          tabBarIcon: ({focused}) => <RepairTab focused={focused} />,
          tabBarShowLabel: false,
        }}     
      />

      <Tabs.Screen 
        name="map" 
        options={{ 
          tabBarIcon: () => <MapTab />,
          tabBarShowLabel: false,
          tabBarStyle: {display: 'none'}
        }}     
      />

      <Tabs.Screen 
        name="me" 
        options={{ 
          tabBarIcon: ({focused}) => <ProfileTab focused={focused} />,
          tabBarShowLabel: false,
        }}     
      />
    </Tabs>
  )
}

export default _layouts