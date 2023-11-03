import { View, Text, Image, ScrollView, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Store from '../Store'
import useMap from '../../utils/useMap';
import BottomSheet from '@gorhom/bottom-sheet';
import StoreBottomSheet from '../StoreSheet/StoreBottomSheet';
import storesData from '../../assets/data/stores.json';

const StoresNearYou = ({ expandSheet }) => {
  // States
  const [stores, setStores] = useState();
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(false);

  const {getLocationService, searchNearbyStore, getCurrentLocation} = useMap();

  // useEffect(() => {
  //   const initStores = async () => {
  //     let permission = await getLocationService();
  //     if (!permission) {
  //       alert('Location service is required.');
  //       return ;
  //     };

  //     const currentLocation = await getCurrentLocation();
  //     setLocation(currentLocation);

  //     const results = await searchNearbyStore(currentLocation.latitude, currentLocation.longitude);
  //     setStores(results);
  //   }

  //   initStores();
  // }, []);

  return !loading ? (
    <View className="ml-5 mt-5 mb-10" >
      <Text className="text-xl font-bold">Store Near You</Text>
      <View className="mt-4">
          {stores && location && (
            <FlatList 
              data={storesData} 
              horizontal
              renderItem={({item}) => <Store store={item} userCoords={location} expandSheet={expandSheet} />}
              contentContainerStyle={{ columnGap: 18 }}
              keyExtractor={(store) => store.place_id}
            />
          )}
      </View>

    </View>
  ) : (
    <Text className="text-xl font-bold">Loading ...</Text>
  )
}




export default StoresNearYou