import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import storesData from '../../assets/data/stores.json';
import Store from '../Store';

const ChooseMechanic = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);


  return (
    <View clasName="w-10/12 mx-auto">
      {/* Search bar */}
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        className="w-10/12 mx-auto bg-gray-300 rounded-2xl"
      />

      {/* Showing results near you */}
      <View className="flex flex-row my-5 w-fit mx-auto">
        <Text className="text-gray-400 font-bold text-lg">Showing</Text>
        <Text className="mx-2 font-bold text-lg">25</Text>
        <Text className="text-gray-400 font-bold text-lg">stores near you</Text>
      </View>

      {/* Stores */}
      <View className="w-full flex flex-col">
        {storesData.map(store => (
          <Store 
            key={store.place_id} 
            store={store} 
            width='w-11/12'
            height='h-52'
            userCoords={{ latitude: 2.725889, longitude: 101.937820 }} 
            classes='mb-5 mx-auto'
          />
        ))}
      </View>
    </View>
  )
}

export default ChooseMechanic