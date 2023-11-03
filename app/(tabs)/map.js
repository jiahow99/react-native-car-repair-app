import { View, Text, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps';
import MapTheme from '../../assets/maps/theme-1.json'
import * as Location from 'expo-location';
import {GOOGLE_API_KEY} from '@env';
import axios from 'axios';
import useMap from '../../utils/useMap';
import CustomMarker from '../../component/map/CustomMarker';

const map = () => {
  const [location, setLocation] = useState();
  const [stores, setStores] = useState();
  const [loading, setLoading] = useState(true);

  const { getLocationService, searchNearbyStore, getCurrentLocation } = useMap();

  // Use Effect
  useEffect(() => {
    const initMap = async () => {
      // Location service
      let status = await getLocationService();
  
      // Permission fail
      if (!status) {
        alert('Location service is required.');
        return ;
      }
  
      // Current location
      let currentLocation = await getCurrentLocation();
      setLocation(currentLocation);
  
      // Nearby store
      const {latitude, longitude} = currentLocation;
      let searchResults = await searchNearbyStore(latitude, longitude, 10);
      setStores(searchResults);
    }

    initMap().finally(() => setLoading(false));

  }, []);

  return loading ? (
    <Text>Loading ...</Text>
  ) : (
    <MapView
      className="w-full h-full"
      // customMapStyle={MapTheme}
      showsUserLocation={true}
      initialRegion={location}
    >
      {stores && stores.length > 0 && 
        stores.map((store, index) => (
          <CustomMarker key={index} store={store} />
        ))
      }
    </MapView>
  ) 
}

export default map